import React from 'react';
import "./PostBuilder.css";
import {NavLink, Route, Switch} from "react-router-dom";
import Posts from "../Posts/Posts";
import AddPost from "../AddPost/AddPost";
import Contacts from "../Contacts/Contacts";
import About from "../About/About";
import ReadPost from "../ReadPost/ReadPost";
import EditPost from "../EditPost/EditPost";

const PostBuilder = () => {
    return (
        <div className="container">
            <header className="header">
                <h1>My Blog</h1>
                <nav>
                    <NavLink to="/posts">Home</NavLink>
                    <NavLink to="/posts/add">Add</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                </nav>
            </header>
            <Switch>
                <Route path='/' exact component={Posts}/>
                <Route path='/posts' exact component={Posts}/>
                <Route path='/posts/add' component={AddPost}/>
                <Route path='/about' component={About}/>
                <Route  path='/contacts' component={Contacts}/>
                <Route path='/posts/:id' exact component={ReadPost}/>
                <Route path='/posts/:id/edit' exact component={EditPost}/>
                <Route render={() => <h1>Not Found</h1>}/>
            </Switch>
        </div>
    );
};

export default PostBuilder;