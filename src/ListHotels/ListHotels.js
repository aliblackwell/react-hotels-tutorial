import React, { Component } from 'react';
import './ListHotels.css';

import Hotel from '../Hotel/Hotel.js';

class ListHotels extends Component {

  state = {
    hotels: null,
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3001/hotels')
    const myJson = await response.json();
    console.log(myJson);
    this.setState({hotels: myJson})
  }

  render() {
    const {hotels} = this.state;

    return(
      <div className="ListHotels">
        {hotels && (
          <div className="ListHotels-content">
              {hotels.map((hotel, i) => (
                <Hotel
                  key={i}
                  hotelName={hotel.name}
                  hotelLocation={hotel.city}
                  hotelRating={hotel.rating}
                />
              ))}
            </div>
        )}

        {!hotels && (
          <div id="loading">Loading</div>
        )}
      </div>
    ) 
 
  }
}

export default ListHotels;
