import React, { Component } from 'react'
import footerBackground1 from '../utils/footerBackground1.JPG'

export class FooterType2 extends Component {
    render() {
        return (
            <div>
                <div className='row' style={row1Style}>
                    <h1 style={h1Style} >Ready to get started?</h1>
                    <h2>Contact us today and we'll put together a quote tailored to your needs.</h2>
                </div>
                <div className='row' style={row2Style}>
                    <h1>hello</h1>
                </div>
                
            </div>
        )
    }
}

export default FooterType2
const row1Style = {
    padding: '10%',
    // background: 'linear-gradient(to right,rgba(192, 192, 192, 1), #01184100)',
    backgroundImage: `url(${footerBackground1})`,
    backgroundSize: 'cover'

}
const row2Style = {
    padding: '3%',
    // background: 'linear-gradient(to right,rgba(192, 192, 192, 1), #01184100)',
}
const h1Style = {
    padding: '5% 0% 0% 0%',
    color: 'white',
    fontWeight: 'bold'
}