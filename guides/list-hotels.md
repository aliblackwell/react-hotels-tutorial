# List Hotels

## 1. ListHotels Component

Create a new file called ListHotels.js inside a directory called ListHotels in your project's src directory. Make sure to create a CSS file called ListHotels.css where any styles will go. This can be blank for now. Inside the ListHotels.js file, create the ListHotels component:

```js
import React, { Component } from 'react';
import './ListHotels.css';

class ListHotels extends Component {

  render() {
    return (
      <div className="ListHotels">

      </div>
    );
  }
}

export default ListHotels;
```

Save this in a directory called ListHotels and import it into your App.js:

```js
import React, { Component } from 'react';
import './App.css';
import Header from './layout/Header/Header.js';
import ListHotels from './ListHotels/ListHotels.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ListHotels />
      </div>
    );
  }
}

export default App;
```
## 2. Hotel Component

Create a new React Component called Hotel inside a directory called Hotel in your project's src directory.

This component will display a simple "card" with the name of the hotel, the location of the hotel, and the average rating of the hotel.

These are the properties – or "props" – that we will pass to the component each time we instantiate an instance of it.

``` js

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

```

To test that this works, let's add a few to our ListHotels component:

```js

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

```

We should now see three Hotels when we load the app. You might want to give the Hotels Component some style inside Hotel.css

```CSS
.Hotel {
  border: 1px solid rgba(100,100,100,0.5);
  margin: 3rem;
}
```
