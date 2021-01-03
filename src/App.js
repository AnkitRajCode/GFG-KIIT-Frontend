import React from 'react';
import Navbar from './components/Navbar';
import LandingBody from './components/LandingBody';
import Events from './components/Events';
import Project from './components/Project';
import AboutUs from './components/AboutUs';
import RegistrationForm from './components/RegistrationForm';
import {BrowserRouter, Route , Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
       <div>
         <Navbar></Navbar>
         <BrowserRouter>
            <Switch>
              <Route path="/" exact component={LandingBody} />
              <Route path="/Events" exact component={Events} />
              <Route path="/Projects" exact component={Project} />
              <Route path="/AboutUs" exact component={AboutUs} />
              <Route path="/RegistrationForm" exact component={RegistrationForm} />
              <Route render={()=><h1>404: Page Not found</h1>} />
            </Switch>
         </BrowserRouter>
       </div>
    );
  }
}

export default App;
