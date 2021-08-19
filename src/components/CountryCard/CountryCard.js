import React, {useCallback, useEffect, useState} from 'react';
import "./CountryCard.css";
import axios from "axios";

const CountryCard = ({code}) => {
    const [alpha3Code, setAlpha3Code] = useState(null);
    const [chooseCountry, setChooseCountry] = useState('');
    const [borderNames, setBorderNames] = useState([]);

    const fetchData = useCallback(async () => {
        if (code === null) return setChooseCountry('Click on country');

        const response = await axios.get('alpha/' + code);
        setAlpha3Code(response.data);
        setChooseCountry('');
        const borderCodes = [];

        borderCodes.push(response.data.borders[0]);
        console.log(borderCodes);

        const borderResponses = await Promise.all(borderCodes.map(borders => axios.get('alpha/' + borders)));
        console.log(borderResponses);
        // borderResponses.forEach(elem => {
        //     setBorderNames(borderResponses[0].data.name);
        // })
        // console.log(borderNames)

    }, [code]);

    useEffect(() => {
        fetchData().catch(console.error);
    }, [fetchData]);


    const borders = (border) => {
        return (
            <ul>
                {border.map(border => {
                    return <li key={border}>{border}</li>;
                })}
            </ul>
        )
    }
    return chooseCountry ? chooseCountry : alpha3Code && (
        <div>
            <div className="Card">
                <h1>{alpha3Code.name}</h1>
                <div className="country-flag">
                    <img alt="Country flag" src={alpha3Code.flag}/>
                </div>
                <p><strong>Capital: </strong> {alpha3Code.capital}</p>
                <p><strong>Population: </strong> {alpha3Code.population}</p>
                <div><strong>Borders with: </strong> {borders(alpha3Code.borders)}</div>
            </div>
        </div>
    );
};

export default CountryCard;