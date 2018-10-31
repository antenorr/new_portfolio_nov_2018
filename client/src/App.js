import React, { Component } from 'react';
import Navigator from './Navigator/Navigator'
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


  // Get the passwords and store them in state
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
    // const { passwords } = this.state;
    return (
      <div> 
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
          
        }
      </div>    

    );
  }
}

export default App;

