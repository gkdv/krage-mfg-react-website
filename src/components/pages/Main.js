import React, { Component } from 'react';
import Header from '../Header';
import Gallery from '../Gallery';
import Footer from '../Footer';
import About from '../About';
import Industries from '../Industries';
import Capabilities from '../Capabilities';
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
