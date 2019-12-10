import React from 'react';
import Navbar from './compenents/Navbar.js'
import Introduction from './compenents/Introduction.js'
import Card from './compenents/Card.js'
import Brands from './compenents/Brands.js';
import StatsCard from './compenents/StatsCard.js'
import Links from './compenents/OfficesLink.js'
import Footer from './compenents/Footer.js'
import './App.css';



//menu database
const menuList=[
  {title:"About us",link:"#" },
  
  {title:"Career",link:"#" },
  {title:"Departments",link:"#",dropdown:[
    {title:"Marketing & PR",link:"#"},
    {title:"Customer Success & Sales",link:"#"},
    {title:"IT, Product, Design & UX",link:"#"},
    {title:"Finance & Administration",link:"#"},
    {title:"HR & more",link:"#"}
  ] }
]


//card database
const cardList=[
{divname:"card-services patient-card",
title:"For patients",
description:"Find a doctor, book a visit and solve any health-related doubt",
imageLink:"https://www.docplanner.com/img/screen-marketplace@2x.png",
imageClas:"card-img",
option:["Choose country","Argentina","Australia","Brazil","Chile","Colombia","Czech","France","Italy","Mexico","Peru","Poland","Portugal","Spain","Turkey","UK"]
},
{divname:"card-services doctors-card",
title:"For doctors",
description:"Save time managing visits and cut no-shows by half",
imageLink:"https://www.docplanner.com/img/screen-saas@2x.png",
imageClas:"card-img"}
]

//stats database
const statsList=[
{divname:"country-stat",
imagesrc:"https://www.docplanner.com/img/flag.png",
imagesrcet:"https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x",
title:"Leader in 10 countries",
description:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
},
{divname:"appointement-stat",
imagesrc:"https://www.docplanner.com/img/visits.png",
imagesrcet:"https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x",
title:"1.5 million appointments",
description:"booked last month"
},
{divname:"patient-stat",
imagesrc:"https://www.docplanner.com/img/patients.png",
imagesrcet:"https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x",
title:"30 million unique patients",
description:"visit us every month"
},
{divname:"doctor-stat",
imagesrc:"https://www.docplanner.com/img/doctors.png",
imagesrcet:"https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x",
title:"2 million active doctors",
description:"trust in our solutions"
}
]
//Links database
let linksList=[
  {
    link:"#",
    figclass:"city-office",
    imagesrc:"https://www.docplanner.com/images/warsaw.png",
    imagesrcet:"https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x",
   countryName:"Warsaw",
    buttonLabel:"SEE OPPENINGS"

  },
  {
    link:"#",
    figclass:"city-office",
    imagesrc:"https://www.docplanner.com/images/barcelona.png",
    imagesrcet:"https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x",
   countryName:"Barcelona",
    buttonLabel:"SEE OPPENINGS"

  },
  {
    link:"#",
    figclass:"city-office",
    imagesrc:"https://www.docplanner.com/images/istanbul.png",
    imagesrcet:"https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x",
   countryName:"Istanbul",
    buttonLabel:"SEE OPPENINGS"

  },
  {
    link:"#",
    figclass:"city-office",
    imagesrc:"https://www.docplanner.com/images/rome.png",
    imagesrcet:"https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x",
   countryName:"Rome",
    buttonLabel:"SEE OPPENINGS"

  },
  {
    link:"#",
    figclass:"city-office",
    imagesrc:"https://www.docplanner.com/images/mexico-city.png",
    imagesrcet:"https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x",
   countryName:"Mexico City",
    buttonLabel:"SEE OPPENINGS"

  },
  {
    link:"#",
    figclass:"city-office",
    imagesrc:"https://www.docplanner.com/images/curitiba.png",
    imagesrcet:"https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x",
   countryName:"Curtiba",
    buttonLabel:"SEE OPPENINGS"

  }
]


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
