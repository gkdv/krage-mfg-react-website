import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 style={headerStyle}>About Us</h1>
        </div>
        <div style={contentStyle}>
          <p>
            For years Krage Manufacturing has been offering customers various
            manufacturing and engineering solutions. We have exceptional
            individuals in engineering, management and production to assist you
            in meeting your goals. Krage Mfg. excels in everything from ideas on
            a napkin to short-run prototypes to medium and long run production.
            We have expertise to provide innovative engineering designs from
            ideas to cost effective manufacturable finished parts and
            assemblies. Our engineering and prototyping services are designed
            around providing a quick turnaround with the use of the latest
            technologies and processes.
          </p>
          <p>
            Krage Mfg. prides itself on turning new designs successfully into
            finished products sometimes in a matter of hours. We actively manage
            customer inventory levels and deliver kanban containers directly to
            our customer production lines.
          </p>
          <p>
            We assist our customers in insuring a cost effective design for
            manufacturable products. Cost saving ideas are constantly under
            review. Krage Mfg. has consistently saved our customers thousands to
            hundreds of thousands of dollars through design/process changes
            initiated by our experienced team of ‘Can Do’ individuals.
          </p>
          <p>
            Krage Mfg. wants to be your lowest total cost supplier through
            innovative ideas and efficient manufacturing processes. We want you
            to be the best in your industry!
          </p>
        </div>
      </div>
    );
  }
}

export default About;

const headerStyle = {
    margin: '5% 5% 2% 5%',
    fontWeight: 'bold',
    fontSize: '4rem',
    // color: #01184100
}
const contentStyle = {
    margin: '2% 5% 5% 5%',
    // fontWeight: 'bold',
    fontSize: '1.5rem'
}