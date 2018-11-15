import React, { Component } from 'react';
import './App.css';
import Api from './api.js'
import welcome from './img/KoscuiskoMSWelcomeSign.jpg'
import Mapbox from './map.js'


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
          <h1 className="kos">Kosciusko Mississippi</h1>
        </header>
        <div className="infoKos">
          <h2>
            Info of Kosciusko
          </h2>
          <hr/>
          <div className ="imageCon">

            <img src={welcome} alt = '' className="signPic"></img>
          </div>
          <section className="infoKosCon">
            <Api />
          </section>
          <h2>Locations of Interest</h2>
          <hr/>
          <h4>Currently showing:</h4>
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
          <ul className= "list">
            <li>El Rodeo</li>
            <li>Americas Best Value Inn Kosciusko</li>
            <li>Pizza Hut</li>
            <li>Walmart</li>
            <li>Bp Gas</li>
          </ul>



        </div>


      </div>
      </div>
    );
  }
}

export default App;
