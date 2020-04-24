import React, { Component } from 'react';
import { GoogleMap, Marker, WithGoogleMap } from 'react-google-maps'

const google = window.google;
class Map extends Component{
  constructor(){
    super();
  }
    render() {
      const MyMapComponent = WithGoogleMap((props) =>
        <GoogleMap
        defaultZoom={14}
        position={{lat:10.39029,lng:-99.2838898}}
        defaultTitle="Mapa">

        </GoogleMap>
       )
       return(
       <MyMapComponent
         loadingElement={<div style={{ height: '100%'}}/> }
         containerElement={ <div style={{ height: '70vh'}}/>}
         mapElement={ <div style={{ height: '100%'}}/>}
       />
     );
  }
}
export default Map;
