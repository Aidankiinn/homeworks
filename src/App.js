import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./components/UI/Layout/Layout";
import EditPage from "./containers/EditPage/EditPage";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/" exact component={EditPage}/>
                <Route path="/pages/admin" component={EditPage}/>
                <Route path="/pages:id"  render={() => <h1>Not Found</h1>}/>
                <Route render={() => <h1>Not Found</h1>}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;