import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";

const ReadPost = ({match, history}) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosApi.get('/posts/' + match.params.id + '.json');
            setPost(response.data.post);
        }

        fetchData().catch(console.error);
    }, [match.params.id]);

    const deletePost = async () => {
        await axiosApi.delete('/posts/' + match.params.id + '.json');
        history.replace('/');
    };

    const editPost = () => {
        history.push('/posts/' + match.params.id + '/edit');
    }


    return (
        post &&
        <div style={{border: '1px solid violet', padding: '5px'}}>
            <h2>Post Title: {post.title}</h2>
            <h4>Post Description: <p style={{color: 'violet'}}>{post.message}</p></h4>
            <h4>Date: {post.date}</h4>
            <button className="btn-read" onClick={deletePost}>Delete</button>
            <button className="btn-read" onClick={editPost}>Edit</button>
        </div>
    );
};

export default ReadPost;