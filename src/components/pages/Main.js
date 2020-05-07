import React, { Component } from 'react';
import Header from '../Header';
import Gallery from '../Gallery';
// import Footer from '../Footer';
import Footer from '../FooterType2';
import About from '../About';
import Industries from '../Industries';
// import CapabilitiesDropDown from '../CapabilitiesDropDown';
import TypicalParts from '../TypicalParts';
import MultiCarouselPage from '../MultipleCarCapabilities';

export class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Gallery />
                <About />
                <Industries />
                {/* <Capabilities /> */}
                <MultiCarouselPage />
                {/* <TypicalParts /> */}
                <Footer />
            </div>
        )
    }
}

export default Main
