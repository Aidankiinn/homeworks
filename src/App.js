import React, {useEffect, useState} from 'react';
import FormInput from "./components/FormInput/FormInput";
import Messages from "./components/Messages/Messages";

const url = 'http://146.185.154.90:8000/messages';

function App() {
    const [allMessage, setAllMessage] = useState([]);
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);

            if (response.ok) {
                const messages = await response.json();
                setAllMessage(messages)
            } else {
                const error = (response && response.message) || response.statusText;
                return Promise.reject(error);
            }
        };

        fetchData().catch(e => console.error('There was an error!', e));
    }, []);

    const sendRequest = async (e) => {
        e.preventDefault();
        const data = new URLSearchParams();
        data.set('message', message);
        data.set('author', author);

        const response = await fetch(url, {
            method: 'post',
            body: data,
            success: console.log('Sent!'),
        });
    };

    const getMessageValue = (e) => {
        setMessage(e);
    };

    const getAuthorValue = (e) => {
        setAuthor(e);
    };

    return (
        <>
            <form onSubmit={sendRequest}>
                <FormInput
                    type="submit"
                    title="Add"
                    onMessageChange={(e) => getMessageValue(e.target.value)}
                    onNameChange={(e) => getAuthorValue(e.target.value)}
                />
            </form>
            {allMessage.map(message => {
                return <Messages
                    key={message.id}
                    author={message.author}
                    message={message.message}
                    date={message.datetime}
                />
            })}
        </>
    );
}

export default App;