import React from 'react';
import "./Countries.css";

const Countries = ({countryName, onClick}) => {
    return (
        <li
            className="CountryName"
            onClick={onClick}
        >
            {countryName}
        </li>
    );
};

export default Countries;