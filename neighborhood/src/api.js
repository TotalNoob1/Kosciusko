import React from 'react';
import $ from 'jquery'

// TODO: Add pics using unsplash
var urlKos ='https://en.wikipedia.org/w/api.php?action=opensearch&search=KosciuskoMississippi&format=json&callback=wikiCallback'
var entireResponse ;


class Api extends React.Component {
  state={
    data:[],
    dataKos:[],
  }
  componentDidMount(){
    let anchor = this;

    $.ajax({
      url:urlKos,
      dataType:'jsonp',
      success: function ( response) {
      entireResponse = response[2]//get the response
      anchor.setState({dataKos:entireResponse})
      }
    })
  }
  render() {
    let anchor = this;
    return(
        <div>
          <p tabIndex ='0'>{anchor.state.dataKos}</p>
        </div>
    )

  }

}
export default Api;
