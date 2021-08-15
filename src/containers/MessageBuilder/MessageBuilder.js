import React, {useEffect, useState} from 'react';
import FormInput from "../../components/FormInput/FormInput";
import Messages from "../../components/Messages/Messages";

const url = 'http://146.185.154.90:8000/messages';

const MessageBuilder = () => {
    const [allMessage, setAllMessage] = useState([]);
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        let lastDate = '';

        const fetchData = async () => {
            const response = await fetch(url);

            if (response.ok) {
                const messages = await response.json();
                setAllMessage(messages);
                lastDate = messages[messages.length - 1].datetime;
                console.log(messages);
            } else {
                const error = (response && response.message) || response.statusText;
                return Promise.reject(error);
            }
        };

        fetchData().catch(e => console.error('There was an error!', e));

        setInterval(async () => {
            const responses = await fetch(url + '?datetime=' + lastDate);

            if (responses.ok) {
                const message = await responses.json();

                if (message.length !== 0) {
                    setAllMessage(prev => [...prev, message]);
                    lastDate = message[message.length - 1].datetime;
                }
            }
        }, 2000)
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
            <div className="messages">
                {allMessage.map(message => {
                    return <Messages
                        author={message.author}
                        key={message._id}
                        message={message.message}
                        date={message.datetime}
                    />
                })}
            </div>
        </>
    );
};

export default MessageBuilder;