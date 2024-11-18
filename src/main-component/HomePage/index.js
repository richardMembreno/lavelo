import React from  'react';
import { useParams } from 'react-router-dom';

// components
import Couple from '../../components/couple';
import SimpleSlider from '../../components/hero';
import Location from '../../components/location';
import Gallery from '../../components/gallery';
import Navbar from '../../components/Navbar'
import Saveday from '../../components/countdown'
import MusicBackground from '../../components/music'
import Invitation from '../../components/Invitation';


const Homepage = () => {
    const {param} = useParams();
    return(
       <div>
           <Navbar/>
           <SimpleSlider/>
           <Saveday/>
           <Couple/>
           <Location/>
           <Gallery/>
           <MusicBackground />
           <Invitation param={param}/>
       </div>
    )
}

export default Homepage;