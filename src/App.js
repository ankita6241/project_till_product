 import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./components/Login/LogIn";
import Register from "./components/Register/Register";
// import { ProtectedRoute } from "./ProtectedRoute";
import Page404 from "./components/Page404/Page404";
import Home from './Home';
import About from "./About";
import Feedback from "./Feedback";
import Product from "./Product";
import {CartProvider} from 'react-use-cart';
import Cart from './Cart';
function App() {
  return (
    <div>
      <CartProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/register" exact component={Register} />
        <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          < Route path="/feedback" component={Feedback} />
           {/* <protectedRoute exact path="/profile" component={DashBoard}/> */}
          <Route exact path="/product" component={Product}/>  
          <Route exact path='/cart' component={Cart}/>
          <Route path="*" component={Page404} />
        </Switch>
      </Router>
      </CartProvider>
    </div>
  );
}
export default App;
