import React from 'react';
import Navbar from './compenents/Navbar.js'
import Introduction from './compenents/Introduction.js'
import Card from './compenents/Card.js'
import Brands from './compenents/Brands.js';
import StatsCard from './compenents/StatsCard.js'
import Links from './compenents/OfficesLink.js'
import Footer from './compenents/Footer.js'
import {menuList , cardList , statsList ,linksList } from "./compenents/data.js"
import './App.css';




function App() {
  return (
    <div>
      <Navbar menuItem={menuList}/>
      <Introduction/>
      <Card cardItem={cardList}/>
      <Brands/>
      <StatsCard statsItem={statsList}/>
       <Links linkItem={linksList}/>
       <Footer/>
    </div>
  );
}

export default App;
