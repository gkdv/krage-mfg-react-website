import React, { Component } from 'react';
import Header from '../Header';
// import Footer from '../Footer';
import Footer from '../FooterType2';
import GoogleMap from '../GoogleMap';
import ContactInfo from '../ContactInfo';


export class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                
                <GoogleMap />
                <ContactInfo />
                {/* <Footer style={style}/> */}
                <Footer />
                
            </div>
        )
    }
}

export default Contact
// useless comment
// another useless comment
// const style = {
//     bottom: 0,
//     position: 'fixed',
// }