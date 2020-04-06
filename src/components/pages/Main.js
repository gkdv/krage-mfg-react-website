import React, { Component } from 'react';
import Header from '../Header';
import Gallery from '../Gallery';
import Footer from '../Footer';
import Industries from '../Industries';
import Capabilities from '../Capabilities';

export class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Gallery />
                <Industries />
                <Capabilities />
                <Footer />
            </div>
        )
    }
}

export default Main
