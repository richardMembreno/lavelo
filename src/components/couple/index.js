import React from 'react'
import Sectiontitle from '../section-title'
import propuesta2 from '../../images/principal.jpeg'
import './style.css'

const Couple = () => {
    return(
        <div id="couple" className="about-wrap">
            <div className="couple-area section-padding pb-70">
                <Sectiontitle section={"In this world, it's just us"}/>
                <div className="container">
                    <div className="couple-wrap">
                        <div className="row">
                            <div className="col-lg-5 couple-single m-auto">
                                <div className="couple-wrap couple-wrap-3">
                                    <div className="couple-img couple-img-2">
                                        <img src={propuesta2} alt="thumb"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
        
    )
}

export default Couple;