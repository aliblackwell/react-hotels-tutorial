import React, { Component } from 'react';
import './Hotel.css';

class Hotel extends Component {
  render() {
    const {hotelName, hotelLocation, hotelRating} = this.props;
    return (
      <div className="Hotel">
        <h1>{hotelName}</h1>
        <h2>{hotelLocation}</h2>
        <p>{hotelRating}</p>
      </div>
    );
  }
}

export default Hotel;
