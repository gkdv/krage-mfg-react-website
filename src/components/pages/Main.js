import React, { Component } from 'react';
import Header from '../Header';
import Gallery from '../Gallery';
import Footer from '../Footer';

export class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Gallery />
                <Footer />
            </div>
        )
    }
}

export default Main
