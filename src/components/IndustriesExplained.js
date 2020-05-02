import React, { Component } from 'react';
import TabBar from './TabBar.js'

export class IndustriesExplained extends Component {
    render() {
        return (
            <div>
                        <TabBar Tabs={['Commercial & Industrial Construction', 'Electric Utility', 'Commercial Cooling & Heating']} />
                
            </div>
        )
    }
}

export default IndustriesExplained
