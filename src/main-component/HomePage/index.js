import React from  'react';

// components
import Couple from '../../components/couple';
import SimpleSlider from '../../components/hero';
import Location from '../../components/location';
import Gallery from '../../components/gallery';
import Navbar from '../../components/Navbar'
import Saveday from '../../components/countdown'
import Invitation from '../../components/Invitation';


const Homepage = () => {
    return(
       <div>
           <Navbar/>
           <SimpleSlider/>
           <Saveday/>
           <Couple/>
           <Location/>
           <Gallery/>
           <Invitation />
       </div>
    )
}

export default Homepage;