import React from 'react';
import './App.css';

import Home from './Pages/Home';
import About from './Pages/AboutDetails';
import Rooms from './Pages/Rooms';
import Gallery from './Pages/Gallery';
import AwardsPartners from './Pages/AwardsPartners';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error';
import {Route,Switch} from 'react-router-dom';

import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
     <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/rooms' component={Rooms} />
      <Route exact path='/gallery' component={Gallery}/>
      <Route exact path='/awardspartners' component={AwardsPartners}/>
      <Route exact path='/rooms/:slug' component={SingleRoom} />
      <Route component={Error} />
     </Switch> 
    </>
  );
  
}

export default App;
