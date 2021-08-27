import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PostBuilder from "./containers/PostBuilder/PostBuilder";

const App = () => (
   <BrowserRouter>
       <Switch>
           <Route path="/" component={PostBuilder}/>
           <Route render={() => <h1>Not Found</h1>}/>
       </Switch>
   </BrowserRouter>
);

export default App;