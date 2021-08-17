import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";

axios.defaults.baseURL = 'https://restcountries.eu/rest/v2/';

ReactDOM.render(<App />, document.getElementById('root'));

