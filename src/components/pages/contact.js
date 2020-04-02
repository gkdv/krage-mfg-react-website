import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import GoogleMap from '../GoogleMap';
import ContactInfo from '../ContactInfo';


export class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                
                <GoogleMap />
                <ContactInfo />
                <Footer style={style}/>
                
            </div>
        )
    }
}

export default Contact

const style = {
    bottom: 0,
    position: 'fixed',
}