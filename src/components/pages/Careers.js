import React, { Component } from 'react'
import Header from '../Header';
// import Footer from '../Footer';
import Footer from '../FooterType2';
import CareersInfo from '../CareersInfo';

export class Careers extends Component {
    render() {
        return (
            <div>
                <Header />
                <CareersInfo />
                <Footer />
                
            </div>
        )
    }
}

export default Careers
