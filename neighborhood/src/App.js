import React, { Component } from 'react';
import './App.css';
import Api from './api.js'
import welcome from './img/KoscuiskoMSWelcomeSign.jpg'
import Mapbox from './map.js'
class App extends Component {
  state ={
    filter:'all'
  }
  gm_authFailure(){
    window.alert("Mapbox error please reload.")
  }
  render() {
    let options = [['restraunt',"El Rodeo"],['hotel',"Americas Best Value Inn Kosciusko"],['restraunt',"Pizza Hut"],['store',"Walmart"],['gas',"Bp Gas"]]
    let select = []
    let anchor = this;
    function onClick(event) {
      anchor.setState({filter:event.target.value})
    }
    function change() {
      for (var i = 0; i < select.length; i++) {//Clears select
        select[i].pop()
      }
      if (anchor.state.filter ==='all') {
        for (var i = 0; i < options.length; i++) {
          select.push(options[i][1])
        }
      }else if(anchor.state.filter === 'none'){
        select = [];
      }else {
        for (var x = 0; x < options.length; x++) {
          if (options[x][0] === anchor.state.filter) {
            select.push(options[x][1])
          }
        }

      }
      anchor.setState();
    }
    change()
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
          <h2 tabIndex ='0'>
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
          <ul  role="list" className= "list">
          {select.map((selected)=>(
            <li role='button' tabIndex ='0'>{selected}</li>
          ))}
          </ul>
          <p tabIndex="0" className ='ack'>Thanks to Mapbox and Foursquare for the Api</p>



        </div>


      </div>
      </div>
    );
  }
}

export default App;
