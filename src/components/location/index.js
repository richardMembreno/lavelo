import React from 'react'
import Sectiontitle from '../section-title'
import LocationMap from '../LocationModal/LocationModal'
import talapo from '../../images/talapo.png'
import weddinggift from '../../images/weddinggift.jpg'
import './style.css'

const Location = () => {
    return (


        <div id="event" className="service-area section-padding">
            <div className="container">
                <Sectiontitle section={'Información'} />
                <div className="service-area-menu">
                    <div className="Ceremony-wrap">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="ceromony-img">
                                    <img src={talapo} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ceromony-content">
                                    <h3>Ceremonia Civil</h3>
                                    <span>Hora de inicio 4:30 PM, agradecemos tu puntualidad.</span>
                                    <div className='mt-4'>
                                        <LocationMap buttonClass={'location-btn'} />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="ceromony-content ceromony-content2">
                                <h3>Regalos</h3>
                                <span>Muestras de cariño por medio de sobre.</span>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ceromony-img2">
                                <img src={weddinggift} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location;