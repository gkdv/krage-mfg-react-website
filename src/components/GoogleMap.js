import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
// import MapContainer from "./MapContainer";

export class GoogleMap extends Component {
  render() {
    return (
        <div style={mapWrapper}>

        <Map
          google={this.props.google}
          zoom={10}
          style={mapWrapper}
          initialCenter={{ lat: 38.281613, lng: -104.521235 }}
        >
          <Marker position={{ lat: 38.281613, lng: -104.521235 }} />
        </Map>
        </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLEAPIKEY
})(GoogleMap);


const mapWrapper = {
    width: "100%",
    height: "400px",
    position: 'static'
}