import React, { Component } from 'react';
import './App.css';
import Api from './api.js'
import welcome from './img/KoscuiskoMSWelcomeSign.jpg'
import Mapbox from './map.js'
let names =[['restraunt','El Rodeo'],['hotel','Americas Best Value Inn Kosciusko'],['restraunt','Pizza Hut'],['store','Walmart'],['gas','Bp Gas']]

class App extends Component {
  state ={
    filter:'all'
  }

  render() {
    let anchor = this;
    function onClick(event) {
      anchor.setState({filter:event.target.value})
    }
    return (
      <div className="App">
      <div id="map" key ='mapCon'>
        <Mapbox key ='map' selected = {this.state.filter}/>

      </div>
      <div className="content">
        <header className="heading">
          <h1 tabIndex ='0' className="kos">Kosciusko Mississippi</h1>
        </header>
        <div className="infoKos">
          <h2 tabindex ='0'>
            Info of Kosciusko
          </h2>
          <hr/>
          <div className ="imageCon">

            <img tabIndex ='0'src={welcome} alt = 'Welcome to Kosciusko' className="signPic"></img>
          </div>
          <section className="infoKosCon">
            <Api />
          </section>
          <h2 tabIndex ='0'>Locations of Interest</h2>
          <hr/>
          <h4 tabIndex ='0'>Currently showing:</h4>
          <section className= 'selectedOptions'>
            <select defaultValue ='all' onChange ={onClick} className = "options">
              <option  value="hotel" >Hotel</option>
              <option  value="restraunt">Restraunt</option>
              <option  value="gas">Gas</option>
              <option  value="store">Store</option>
              <option value="none">None</option>
              <option  value="all">All</option>
            </select>
          </section>
          {}
          <ul  className= "list">
            <li value="restraunt" tabIndex ='0'>El Rodeo</li>
            <li value="hotel" tabIndex ='0'>Americas Best Value Inn Kosciusko</li>
            <li value="restraunt" tabIndex ='0'>Pizza Hut</li>
            <li value="store" tabIndex ='0'>Walmart</li>
            <li value="gas" tabIndex ='0'>Bp Gas</li>
          </ul>
          <p className ='ack'>Thanks to Mapbox and foursquare for the Api</p>



        </div>


      </div>
      </div>
    );
  }
}

export default App;
