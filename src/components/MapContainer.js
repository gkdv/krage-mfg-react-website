import React, { Component } from 'react'
import GoogleMap from './GoogleMap'

export class MapContainer extends Component {
    render() {
        return (
            <div className='container' style={containerStyles}>
                <GoogleMap />
                
            </div>
        )
    }
}

export default MapContainer

const containerStyles = {
    width: "400px",
    height: "400px"
  };