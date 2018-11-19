import React, {Component} from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import { Marker } from "react-mapbox-gl";
import { Popup } from "react-mapbox-gl";
let loc =[];//this is where the data for the places is stored
let name=[];

const Map =ReactMapboxGl({
  accessToken: "pk.eyJ1IjoicHJpenphIiwiYSI6ImNqbjlkZW4ycDAwYTQzcHAzc3N3bnJkZmkifQ.bX3NbWd6FaE78ETqbiGw1A"
})
var geojson = [['gasStation',[-89.573001,33.061491]], ['hotel',[-89.577668,33.040732]],['restraunt',[-89.578184,33.039741]],['pizza',[-89.572359,33.046060 ]],['wallmart',[-89.567288,33.053980]]];
let showing =[]
let cats = [
  ['restraunt',[geojson[3],geojson[2]]],
  ['gas',[geojson[0]]],
  ['hotel',[geojson[1]]],
  ['store',[geojson[4]]]
]
const searchTerms = ['pizza','mexican','hotel','gas','walmart']
class Mapbox extends Component{
  state ={
    change:'',
    locData:'',
    nameData:''

  }
  componentDidMount(){
    let anchor = this;// TODO: Put this in a for loop
    for (var i = 0; i < searchTerms.length; i++) {
      fetch('https://api.foursquare.com/v2/venues/explore?client_id=3U5ZC3OBRXYMAF13ZXHA33WOB3VNHFMRJTE5OW4FBV5BDM3V&client_secret=F1ZRH4PISLPFTSHM0UWGYU1OEROGORT1ZKCZX3RMQGUUBLUO&v=20180323&limit=1&ll=33.0447,-89.5742&query=' +searchTerms[i])
      .then(function(value) {
        return value.json();
      }).then(function (data) {
        if (data.response.groups[0].items[0].venue.name === "Pizza Hut") {

          loc[0] = data.response.groups[0].items[0].venue.location.formattedAddress;//stores the address and the name of the target
          name[0] =data.response.groups[0].items[0].venue.name;

        }else if (data.response.groups[0].items[0].venue.name === "El Rodeo") {

          loc[1] = data.response.groups[0].items[0].venue.location.formattedAddress;//stores the address and the name of the target
          name[1] = data.response.groups[0].items[0].venue.name;

        }else if (data.response.groups[0].items[0].venue.name === "Americas Best Value Inn Kosciusko") {

          loc[2] = data.response.groups[0].items[0].venue.location.formattedAddress;//stores the address and the name of the target
          name[2] =data.response.groups[0].items[0].venue.name;

        }else if (data.response.groups[0].items[0].venue.name === "BP") {

          loc[3] = data.response.groups[0].items[0].venue.location.formattedAddress;//stores the address and the name of the target
          name[3] =data.response.groups[0].items[0].venue.name;

        }else if (data.response.groups[0].items[0].venue.name === "Walmart Supercenter") {

          loc[4] = data.response.groups[0].items[0].venue.location.formattedAddress;//stores the address and the name of the target
          name[4] =data.response.groups[0].items[0].venue.name;

        }
        anchor.setState({locData:loc})
        anchor.setState({nameData:name})
      }).catch(function(error) {
        loc[i]= 'Apology there has been an error'
        name[i]= 'Apology there has been an error'
        console.log(error);
      });
    }

  }
  render(){
    let anchor = this
    function onClick(event) {
      event.target.style.backgroundColor="blue";
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
      let or = event.target
      setTimeout(function () {
        or.style.backgroundColor = 'transparent';
      },750)
    }
    for (var i = 0; i < cats.length; i++) {
      if (this.props.selected === "all") {
      showing = geojson

      }else if(cats[i][0]===this.props.selected){
        showing = cats[i][1]
      }else if (this.props.selected==='none') {
        showing =[]

      }
    }

    function onLeave() {
      anchor.setState({change:''})

    }


    return(// TODO: figure out why the style warning is popping up
        <Map role="application" tabindex="-1" onMouseLeave ={onLeave} style = "mapbox://styles/mapbox/dark-v9" zoom = {[13.4]} center ={[-89.569310,33.050519]}>
          {showing.map((coor) => (//Puts all the <markers></markers>
            <div key ={coor[1]}>
              <Marker   onClick={onClick} className ={`${coor[0]} marker`} key ={coor[0]} coordinates = {[coor[1][0],coor[1][1]]}
                anchor='bottom'>
              </Marker>
              {anchor.state.change === coor[0]? (
                <Popup tabindex ='0' onMouseLeave ={onLeave} key ={coor[2]} coordinates ={[coor[1][0],coor[1][1]]} className="popUp">
                {loc[this.state.num] !=='Apology there has been an error' ?(
                  <div>
                    <p tabIndex ='0'>{name[this.state.num]}</p>
                    <p tabIndex ='0'>{loc[this.state.num][0]}</p>
                    <p tabIndex ='0'>{loc[this.state.num][1]}</p>
                    <p tabIndex ='0'>{loc[this.state.num][2]}</p>
                  </div>

                ):(
                  <div>
                    <p>Apology there has been an error</p>
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
