import React from 'react'
import Sectiontitle from '../section-title'
import couple3 from '../../images/couple/2.png'
import propuesta1 from '../../images/propuesta1.jpeg'
import propuesta2 from '../../images/propuesta2.jpeg'
import './style.css'

const Couple = () => {
    return(
        <div id="couple" className="about-wrap">
            <div className="couple-area section-padding pb-70">
                <Sectiontitle section={'Im this world its just'}/>
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