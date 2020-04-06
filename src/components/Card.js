import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div>
        <div class="card" style={this.props.cardStyle}>
          <img class="card-img-top" style={this.props.imageStyle} src={this.props.cardInfo.src} alt={this.props.alt}></img>
          <div class="card-body">
            <h5 class="card-title" style={this.props.titleStyle}>{this.props.cardInfo.cardTitle}</h5>
            <p class="card-text">
              {this.props.cardInfo.cardText}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;


const style = {
    // width: "18rem",
    // borderStyle: 'none'
}