import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import ShowPosts from "../../components/ShowPosts/ShowPosts";
import axiosApi from "../../axiosApi";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosApi.get('/posts.json');
            setPosts(response.data);
        };

        fetchData().catch(console.error);
    }, []);

    return (
        <Switch>
            <Route path='/' render={() => (<ShowPosts posts={posts}/>)}/>
            <Route path='/posts' exact render={() => (<ShowPosts posts={posts}/>)}/>
        </Switch>
    );
};

export default Posts;
