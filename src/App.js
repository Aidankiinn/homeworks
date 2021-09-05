import React from 'react';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import {Container} from "@material-ui/core";
import AddQuote from "./containers/AddQuote/AddQuote";
import Quotes from "./containers/Quotes/Quotes";

const App = () => (
    <Layout>
        <Container>
            <Switch>
                <Route path='/' exact component={Quotes}/>
                <Route path='/quotes/:category' component={Quotes}/>
                <Route path="/add-quote"  component={AddQuote}/>
                <Route component={NotFound}/>
            </Switch>
        </Container>
    </Layout>
);

export default App;