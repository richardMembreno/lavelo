import React from  'react';

// components
import Couple from '../../components/couple';
import SimpleSlider from '../../components/hero';
import Location from '../../components/location';
import Gallery from '../../components/gallery';
import Gift from '../../components/gift';
import Navbar from '../../components/Navbar'
import Saveday from '../../components/countdown'


const Homepage = () => {
    return(
       <div>
           <Navbar/>
           <SimpleSlider/>
           <Saveday/>
           <Couple/>
           <Location/>
           <Gallery/>
           <Gift/>
       </div>
    )
}

export default Homepage;