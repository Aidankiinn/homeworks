import React, {useEffect, useState} from 'react';
import "./CountryBuilder.css";
import Countries from "../../components/Countries/Countries";
import CountryCard from "../../components/CountryCard/CountryCard";
import axios from "axios";

const CountryBuilder = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountryCode, setSelectedCountryCode] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get( 'all?fields=name;alpha3Code');
            const countries = response.data;

            setCountries(countries);
        }
        fetchData().catch((e) => console.error(e));
    }, [])

    return (
        <div className="boxes">
            <div className="box-1">
                <ol className="orderedList">
                    {countries.map(country => {
                        return <Countries
                            key={country.name}
                            countryName={country.name}
                            onClick={() => setSelectedCountryCode(country.alpha3Code)}
                        />
                    })}
                </ol>
            </div>
            <div className="box-2">
                <CountryCard code={selectedCountryCode}/>
            </div>
        </div>
    );
};

export default CountryBuilder;