import React from 'react';
import "./ShowPosts.css";
import {useHistory} from "react-router-dom";

const ShowPosts = ({posts}) => {
    const history = useHistory();
    const readMore = (id) => {
        history.push('/posts/' + id);
    }
    return (
        <div className="Posts">
            {
                posts && Object.keys(posts).map((p) => (
                    <div className="Post" key={p}>
                        <p>Created on: {posts[p].post.date}</p>
                        <h3>{posts[p].post.title}</h3>
                        <button className="btn-read" onClick={() => readMore(p)}>Read More >></button>
                    </div>
                ))
            }

        </div>
    );
};

export default ShowPosts;