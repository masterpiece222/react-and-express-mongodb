import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import Home from "./components/Home";
import Wordmysteries from "./components/Wordmysteries";
import Comics from "./components/Comics";
import Products from "./components/Products";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/Login";





class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
           <Navigation />

            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/Wordmysteries" component={Wordmysteries} />
              <Route path="/Comics" component={Comics} />
              <Route path="/Products" component={Products} />
              <Route path="/Register" component={() => window.location = 'http://localhost:5000/users/register'} />
              <Route path="/Login" component={() => window.location = 'http://localhost:5000/users/login'} />
              <Route component={Error} />

            </Switch>
         </div>
      </BrowserRouter>
    );
  }
}

export default App;
