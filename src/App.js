import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./components/UI/Layout/Layout";
import EditPage from "./containers/EditPage/EditPage";
import Content from "./components/Content/Content";
import {links} from "./constants";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/" exact render={() => <h1>Welcome!</h1>}/>
                <Route path="/page/admin" exact component={EditPage}/>
                {links.map(item => (
                    <Route path={"/page/" + item} component={Content}/>
                ))}
                <Route render={() => <h1>Not Found</h1>}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;