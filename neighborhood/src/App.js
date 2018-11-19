import React, { Component } from 'react';
import './App.css';
import Api from './api.js'
import welcome from './img/KoscuiskoMSWelcomeSign.jpg'
import Mapbox from './map.js'

let loc = [[],[],[],[],[]];
const searchTerms = ['pizza','mexican','hotel','gas','walmart']

class App extends Component {
  state ={
    filter:'all'
  }
  gm_authFailure(){
    window.alert("Mapbox error please reload.")
  }
  componentDidMount(){//this is for accessibility
    let anchor = this;
    for (var i = 0; i < searchTerms.length; i++) {
      fetch('https://api.foursquare.com/v2/venues/explore?client_id=3U5ZC3OBRXYMAF13ZXHA33WOB3VNHFMRJTE5OW4FBV5BDM3V&client_secret=F1ZRH4PISLPFTSHM0UWGYU1OEROGORT1ZKCZX3RMQGUUBLUO&v=20180323&limit=1&ll=33.0447,-89.5742&query=' +searchTerms[i])
      .then(function(value) {
        return value.json();
      }).then(function (data) {
        if (data.response.groups[0].items[0].venue.name === "Pizza Hut") {

          loc[0][1] = data.response.groups[0].items[0].venue.location.formattedAddress;//stores the address and the name of the target
          loc[0][0] =data.response.groups[0].items[0].venue.name;

        }else if (data.response.groups[0].items[0].venue.name === "El Rodeo") {

          loc[1][1] = data.response.groups[0].items[0].venue.location.formattedAddress;//stores the address and the name of the target
          loc[1][0] = data.response.groups[0].items[0].venue.name;

        }else if (data.response.groups[0].items[0].venue.name === "Americas Best Value Inn Kosciusko") {

          loc[2][1] = data.response.groups[0].items[0].venue.location.formattedAddress;//stores the address and the name of the target
          loc[2][0] =data.response.groups[0].items[0].venue.name;

        }else if (data.response.groups[0].items[0].venue.name === "BP") {

          loc[3][1] = data.response.groups[0].items[0].venue.location.formattedAddress;//stores the address and the name of the target
          loc[3][0] =data.response.groups[0].items[0].venue.name;

        }else if (data.response.groups[0].items[0].venue.name === "Walmart Supercenter") {

          loc[4][1] = data.response.groups[0].items[0].venue.location.formattedAddress;//stores the address and the name of the target
          loc[4][0] =data.response.groups[0].items[0].venue.name;
          console.log(loc[4][0]);

        }
        anchor.setState({locData:loc})
      }).catch(function(error) {
        loc[i]= 'Apology there has been an error'
        console.log(error);
      });
    }

  }

  render() {
    let options = [['restraunt',"El Rodeo",[]],['hotel',"Americas Best Value Inn Kosciusko",[]],['restraunt',"Pizza Hut",[]],['store',"Walmart Supercenter",[]],['gas',"BP",[]]]
    let select = []
    let anchor = this;
    function change() {
      for (var i = 0; i < select.length; i++) {//Clears select
        select.pop()
      }
      if (anchor.state.filter ==='all') {
        for (var y = 0; y < options.length; y++) {
          select.push(options[y])
            for (var s = 0; s < loc.length; s++) {
              if (loc[s][0] === options[y][1]) {
                options[y][2] = loc[s][1]
              }
            }
        }
      }else if(anchor.state.filter === 'none'){
        select = [];
      }else {
        for (var x = 0; x < options.length; x++) {
          if (options[x][0] === anchor.state.filter) {
            select.push(options[x])
            for (var s = 0; s < loc.length; s++) {
              if (loc[s][0] === options[x][1]) {
                options[x][2] = loc[s][1]
                console.log(options[x]);
              }
            }
          }
        }
      }
      anchor.setState();
    }
    function onClick(event) {
      anchor.setState({filter:event.target.value})
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
            <li  key ={selected} aria-label ={`${selected[1]} ${selected[2][0]} ${selected[2][1]} ${selected[2][2]}`}  className ="addressInput" tabIndex ='0'>{selected[1]}</li>
          ))}
          </ul>
          <p tabIndex="0" className ='ack'>Thanks to Mapbox, Wikipedia and Foursquare for the Api</p>



        </div>


      </div>
      </div>
    );
  }
}

export default App;
