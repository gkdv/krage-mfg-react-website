import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
// import ContactForm from '../ContactForm';
import GoogleMap from '../GoogleMap';
// import MapContainer from '../MapContainer';

export class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* <MapContainer /> */}
                <GoogleMap />
                {/* <ContactForm /> */}
                <Footer />
                
            </div>
        )
    }
}

export default Contact

const style = {
    // display: 'flex',
    position: 'static',
    
}