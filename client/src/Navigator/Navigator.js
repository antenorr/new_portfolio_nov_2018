import React, { Component } from 'react';
import hamburgerIcon from './ic8.png';
import chart48 from './48chart.png';
import book from './book.png';
import support from './support.png';
import "./Navigator.css";



class navigator extends Component {

  
render (props) {

    return (
        <div className={`sidebar ${this.props.presentTogglePosition}` }>
         
                < div className="toggler">
                    <img onClick={this.props.toggleToggler} src={hamburgerIcon} className="navIcon" alt="navigator icon" />
                    <div className="brand">
                        Logo
                    </div>
                </div > 
       
            <ul>
                <li><img src={book} className="inline" alt="" />About</li>
                <li><img src={chart48} className="inline" alt="" />Stories</li>
                <li><img src={support} className="inline" alt="" />Support</li>
            </ul>
        </div>
 
    )
}

   
}

export default navigator





  