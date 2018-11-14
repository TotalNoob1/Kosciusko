import React, { Component } from 'react';
import './App.css';
import Api from './api.js'
import welcome from './img/KoscuiskoMSWelcomeSign.jpg'
import Mapbox from './map.js'


class App extends Component {
  state ={
    filter:''
  }

  render() {
    let anchor = this;
    function onClick(event) {
      anchor.setState({filter:event.target.value})
    }
    console.log(anchor.state.filter);
    return (
      <div className="App">
      <div id="map" key ='mapCon'>
        <Mapbox key ='map' selected = {this.state.filter}/>
        <section>
          <select defaultValue ='none' onChange ={onClick} className = "options">
            <option  value="hotel" >Hotel</option>
            <option  value="restraunt">Restraunt</option>
            <option  value="gas">Gas</option>
            <option  value="none">None</option>
            <option autoFocus value="all">All</option>
          </select>
        </section>

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
          <img src={welcome} alt = '' className="signPic"></img>
          <section className="infoKosCon">
            <Api infoKos={true}/>
          </section>



        </div>


      </div>
      </div>
    );
  }
}

export default App;
