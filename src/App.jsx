
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import Maps from './components/maps';
import { Login } from "./components/login";
import { SignUp } from "./components/SignUp";
import  Pdw  from "./components/pdw";
import { Space_admin } from "./components/space_admin";
import { Space_livreur } from "./components/space_livreur";
import { Space_ouvrier } from "./components/space_ouvrier";
import {Space_personnel} from "./components/space_personnel";
import Learn from "./components/leran";


import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Header data={landingPageData.Header} />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/maps" component={Maps} />
          <Route path="/space_admin" component={Space_admin} />
          <Route path="/space_livreur" component={Space_livreur} />
          <Route path="/space_ouvrier" component={Space_ouvrier} />
          <Route path="/space_personnel" component={Space_personnel} />
          <Route path="/pdw" component={Pdw} />
          <Route path="/learn" component={Learn} />
     
        </Switch>
      </div>
    </Router>
  );
};

export default App;
