import React from 'react'
import Sectiontitle from '../section-title'
import talapo from '../../images/talapo.png'
import weddinggift from '../../images/gift/gift3.jpeg'
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
                                        <div className="next-post">
                                            <a href='https://maps.app.goo.gl/GDLpRdZYr4edFNCt7' target='_blank' rel="noreferrer"><span className="post-control-link">Ver Ubicación</span></a>
                                        </div>
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