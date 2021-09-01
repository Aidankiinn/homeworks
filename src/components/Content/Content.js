import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";

const Content = ({match}) => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosApi.get(match.path + '.json');
            setContent(response.data);
        };

        fetchData().catch(console.error);
    }, [match.path]);

    return (
        <div>
            <h2>{content.title}</h2>
            <p><strong>{content.content}</strong></p>
        </div>
    );
};

export default Content;