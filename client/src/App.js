import React from 'react';
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import Card from "./components/Card"
// import Container from "./components/Container"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import Search from "./pages/Search"
import Saved from "./pages/Saved"



function App() {
  return (
    <Router>
      <div> 
          <Redirect from="/" to="/Search" />
          <Route exact path="/Search" component={Search}/>
          <Route exact path="/Saved" component={Saved}/>
      </div>
    </Router>
      );
    }
    
    export default App;
