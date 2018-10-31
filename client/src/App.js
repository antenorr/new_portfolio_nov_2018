import React, { Component } from 'react';
import Navigator from './Navigator/Navigator';
import LabelBottomNavigation from './LabelBottomNavigation/LabelBottomNavigation';
import ButtonAppBar from './ButtonAppBar/ButtonAppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

class App extends Component {
  // Initialize state
  state = { 
    passwords: [],
    nasaData: [],
    isActive: false
  };

  // Fetch passwords after first mount
  componentDidMount() {
    this.getPasswords();
  }

  toggleToggler = () => {
    let drawOut = this.state.isActive;
    this.setState({ isActive: !drawOut })
    console.log(drawOut)
  }


  // Get the passwords and store them into upon launch automatically state
  getPasswords = () => {
    fetch('/apix')
      .then((response) => {
        return response.json();
      })
      .then((passwords) => {
        this.setState({ passwords: passwords })
        console.log(JSON.stringify(passwords));
      });
     
  }


  //This function will query node to query spacex API
nasaData = () => {
  fetch(`/api/spacex`, {method: 'GET'})
    .then((response)=>{
      return response.json();
    })
    .then((nasaData) => {
      this.setState({ nasaData })
      console.log(nasaData)
      // console.log(JSON.stringify(nasaData));
    });

}




  render() {

    return (
      <div> 
        <ButtonAppBar />
        <LabelBottomNavigation />

  
        {/* <FullNavbar /> */}
        {/* below is the navigator toggle/ the button / the inital call to one two three mapped /  and call to spacex mapped
        <Navigator toggleToggler={this.toggleToggler} presentTogglePosition={this.state.isActive}/>

            <button
              className="more button"
              onClick={this.nasaData}>
              Get More
            </button> 
        
        {this.state.passwords.map( (element, idx) => <span key={idx}>{element.answer}</span>)}
        {this.state.nasaData.length > 0 ? (
          this.state.nasaData.map((ele, idx) => <h2 key={idx}>{ele.mission_name} </h2>)
          ) : null
        } */}
      </div>    

    );
  }
}

export default App;

