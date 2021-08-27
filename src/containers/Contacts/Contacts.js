import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";

const Contacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosApi.get('/pages/contacts.json');
            setContacts(response.data);
        }

        fetchData().catch(console.error);
    }, []);

    return (
        <div style={{border: '1px solid gold'}}>
            <h4>Address: {contacts.address}</h4>
            <h5>E-mail: {contacts.email}</h5>
            <strong>Number: {contacts.number}</strong>
        </div>
    );
};

export default Contacts;