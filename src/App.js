import React from 'react';
import "./App.css";
import PortfolioBuilder from "./containers/PortfolioBuilder/PortfolioBuilder";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";

const App = () => (
   <BrowserRouter>
       <Switch>
           <Route path="/" exact component={MainPage}/>
           <Route path="/Portfolio" component={PortfolioBuilder}/>
           <Route render={() => <h1>Not Found</h1>}/>
       </Switch>
   </BrowserRouter>
);

export default App;