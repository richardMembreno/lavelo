import React from 'react';
import {Link} from 'react-router-dom'

import './style.css'

const Header = () => {

    return(

        <div className="Header_root">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="logo">
                                <h2><Link to='/home'>Katherine Sibrian<span><i className="fa fa-heart" aria-hidden="true"></i></span>Luis Garcia</Link></h2>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
             </div>
      </div>
        
    )
}

export default Header;
