import React, { Component } from 'react';
import './ListHotels.css';
import Hotel from '../Hotel/Hotel.js';

class ListHotels extends Component {

  render() {
    return (
      <div className="ListHotels">
        <Hotel hotelName="The Ritz" hotelLocation="London" hotelRating="3"/>
        <Hotel hotelName="City View Hotel" hotelLocation="Bethnal Green" hotelRating="5"/>
        <Hotel hotelName="Premier Inn" hotelLocation="Tottenham Hale" hotelRating="3"/>
      </div>
    );
  }
}

export default ListHotels;
