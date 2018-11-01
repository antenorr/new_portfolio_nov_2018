import React from 'react';

import Background from './niceh.jpg';
import styles from './Jumbotron.module.css'



const sectionStyle = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "80vh",
    repeat: "no-repeat",
    position: "relative",
    top: "100px",
    zIndex: -5
   
}

const Jumbotron = (props) => {

    return (
        <div>  
            <div style={sectionStyle}>
                
              {/* background image here */}

            </div>
            
        </div>
    )
}


export default Jumbotron;