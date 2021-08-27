import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";

const About = () => {
    const [about, setAbout] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosApi.get('/pages/about.json');
            setAbout(response.data);
        }

        fetchData().catch(console.error);
    }, []);

    return (
        <div style={{border: '1px solid gold'}}>
            <h4>Author: {about.author}</h4>
            <strong>Organization: {about.organization}</strong>
        </div>
    );
};

export default About;