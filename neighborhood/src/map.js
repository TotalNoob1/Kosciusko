import React, {Component} from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import { Marker } from "react-mapbox-gl";
import { Popup } from "react-mapbox-gl";
let loc =[];//this is where the data for the places is stored
let name=[];

const Map =ReactMapboxGl({
  accessToken: "pk.eyJ1IjoicHJpenphIiwiYSI6ImNqbjlkZW4ycDAwYTQzcHAzc3N3bnJkZmkifQ.bX3NbWd6FaE78ETqbiGw1A"
})
var geojson = [['gasStation',[-89.573001,33.061491]], ['hotel',[-89.577668,33.040732]],['restraunt',[-89.578184,33.039741]],['pizza',[-89.572359,33.046060 ]],['wallmart',[-89.566914,33.055070]]];
class Mapbox extends Component{
  state ={
    change:'',
    locData:'',
    nameData:''

  }
  componentDidMount(){
    let anchor = this;// find a way to make the fetch api better
    fetch('https://api.foursquare.com/v2/venues/explore?client_id=3U5ZC3OBRXYMAF13ZXHA33WOB3VNHFMRJTE5OW4FBV5BDM3V&client_secret=F1ZRH4PISLPFTSHM0UWGYU1OEROGORT1ZKCZX3RMQGUUBLUO&v=20180323&limit=1&ll=33.0447,-89.5742&query=Pizza')
    .then(function(value) {
      return value.json();
    }).then(function (data) {
      loc[0] = data.response.groups[0].items[0].venue.location.formattedAddress;//stores the address and the name of the target
      name[0] =data.response.groups[0].items[0].venue.name;
      anchor.setState({locData:loc})
      anchor.setState({nameData:name})
    }).catch(function(error) {
      loc[0]= 'Apology there has been an error'
      name[0]= 'Apology there has been an error'
      console.log(error);
    });
    fetch('https://api.foursquare.com/v2/venues/explore?client_id=3U5ZC3OBRXYMAF13ZXHA33WOB3VNHFMRJTE5OW4FBV5BDM3V&client_secret=F1ZRH4PISLPFTSHM0UWGYU1OEROGORT1ZKCZX3RMQGUUBLUO&v=20180323&limit=1&ll=33.0447,-89.5742&query=Mexican')
    .then(function(value) {
      return value.json();
    }).then(function (data) {
      loc[1] = data.response.groups[0].items[0].venue.location.formattedAddress;
      name[1] =data.response.groups[0].items[0].venue.name;
      anchor.setState({locData:loc})
      anchor.setState({nameData:name})
    })
    .catch(function(error) {
      loc[1]= 'Apology There has been an error'
      name[1]= 'Apology There has been an error'
      console.log(error);
    });
    fetch('https://api.foursquare.com/v2/venues/explore?client_id=3U5ZC3OBRXYMAF13ZXHA33WOB3VNHFMRJTE5OW4FBV5BDM3V&client_secret=F1ZRH4PISLPFTSHM0UWGYU1OEROGORT1ZKCZX3RMQGUUBLUO&v=20180323&limit=1&ll=33.0447,-89.5742&query=hotel')
    .then(function(value) {
      return value.json();
    }).then(function (data) {
      loc[2] = data.response.groups[0].items[0].venue.location.formattedAddress;
      name[2] =data.response.groups[0].items[0].venue.name;
      anchor.setState({locData:loc})
      anchor.setState({nameData:name})
    })
    .catch(function(error) {
      loc[2]= 'Apology there has been an error'
      name[2]= 'Apology there has been an error'
      console.log(error);
    });
    fetch('https://api.foursquare.com/v2/venues/explore?client_id=3U5ZC3OBRXYMAF13ZXHA33WOB3VNHFMRJTE5OW4FBV5BDM3V&client_secret=F1ZRH4PISLPFTSHM0UWGYU1OEROGORT1ZKCZX3RMQGUUBLUO&v=20180323&limit=1&ll=33.0447,-89.5742&query=gas')
    .then(function(value) {
      return value.json();
    }).then(function (data) {
      loc[3] = data.response.groups[0].items[0].venue.location.formattedAddress;
      name[3] =data.response.groups[0].items[0].venue.name;
      anchor.setState({locData:loc})
      anchor.setState({nameData:name})
    })
    .catch(function(error) {
      loc[3]= 'Apology there has been an error'
      name[3]= 'Apology there has been an error'
      console.log(error);
    });
    fetch('https://api.foursquare.com/v2/venues/explore?client_id=3U5ZC3OBRXYMAF13ZXHA33WOB3VNHFMRJTE5OW4FBV5BDM3V&client_secret=F1ZRH4PISLPFTSHM0UWGYU1OEROGORT1ZKCZX3RMQGUUBLUO&v=20180323&limit=1&ll=33.0447,-89.5742&query=walmart')
    .then(function(value) {
      return value.json();
    }).then(function (data) {
      loc[4] = data.response.groups[0].items[0].venue.location.formattedAddress;
      name[4] =data.response.groups[0].items[0].venue.name;
      anchor.setState({locData:loc})
      anchor.setState({nameData:name})
    }).catch(function(error) {
      loc[4]= 'Apology there has been an error'
      name[4]= 'Apology there has been an error'
      console.log(error);
    });
  }
  render(){
    let anchor = this
    function onClick(event) {
      if (event.target.classList[0] === 'wallmart') {
        anchor.setState({change:'wallmart'});
        anchor.setState({num:4});

      }else if (event.target.classList[0] === 'hotel') {
        anchor.setState({change:'hotel'});
        anchor.setState({num:2});

      }else if (event.target.classList[0] === 'gasStation') {
        anchor.setState({change:'gasStation'});
        anchor.setState({num:3});

      }else if (event.target.classList[0] === 'restraunt') {
        anchor.setState({change:'restraunt'});
        anchor.setState({num:1});

      }else if (event.target.classList[0] === 'pizza') {
        anchor.setState({change:'pizza'});
        anchor.setState({num:0});


      }
    }
    return(// TODO: figure out why the style warning is popping up
        <Map style = "mapbox://styles/mapbox/dark-v9" zoom = {[13.4]} center ={[-89.569310,33.050519]}>
          {geojson.map((coor) => (//Puts all the markers
            <div key ={coor[1]}>
              <Marker onClick={onClick} className ={`${coor[0]} marker`} key ={coor[0]} coordinates = {[coor[1][0],coor[1][1]]}
                anchor='bottom'>
              </Marker>
              {anchor.state.change === coor[0]? (
                <Popup key ={coor[2]} coordinates ={[coor[1][0],coor[1][1]]} className="popUp">
                {loc[0][1] ?(
                  <div>
                    <p>{name[this.state.num]}</p>
                    <p>{loc[this.state.num][0]}</p>
                    <p>{loc[this.state.num][1]}</p>
                    <p>{loc[this.state.num][2]}</p>
                  </div>

                ):(
                  <div>
                    <p>{name[this.state.num]}</p>
                  </div>

                )}

                </Popup>
              ):(
                <div>

                </div>

              )}
            </div>
          ))}


        </Map>


    )

  }
}
export default Mapbox
