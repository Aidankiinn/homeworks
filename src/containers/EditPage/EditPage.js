import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import "./EditPage.css";
import {links} from "../../constants";

const EditPage = ({history}) => {
    const [data, setData] = useState({page: '', title: '', content: ''});

    useEffect(() => {
        if (data.page) {
            const fetchData = async () => {
                const response = await axiosApi.get('/page/' + data.page + '.json');
                setData(prev => (
                    {
                        ...prev,
                        title: response.data.title,
                        content: response.data.content
                    }
                ));
            };
            fetchData().catch(console.error);
        }
    }, [data.page]);

    const dataChanged = e => {
        const name = e.target.name;
        const value = e.target.value;

        setData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const editData = async (e) => {
        e.preventDefault();

        try {
            await axiosApi.put('/page/' + data.page.toLowerCase() + '.json', {
                title: data.title,
                content: data.content,
            });
        } finally {
            history.replace('/page/' + data.page.toLowerCase());
        }
    };

    return (
        <div className="container">
            <form onSubmit={editData}>
                <h1>Edit Pages</h1>
                <label>Select page
                    <select
                        value={data.page}
                        name="page"
                        onChange={dataChanged}
                    >{
                        links.map(item => (
                            <option key={item} value={item}>{item.toUpperCase()}
                            </option>))
                    }
                    </select>
                </label>
                <label>Title
                    <input type="text" value={data.title} name="title" onChange={dataChanged}/>
                </label>
                <label>Content
                    <textarea value={data.content} name="content" onChange={dataChanged}/>
                </label>
                <button className="button">Save</button>
            </form>
        </div>
    );
};

export default EditPage;