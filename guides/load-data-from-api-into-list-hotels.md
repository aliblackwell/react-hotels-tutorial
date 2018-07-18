
We are going to load the data from the API using [JavaScript's Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

You will note in the docs that they are using promises. We are going to implement the Fetch API using async/await.

React's Component class exposes a number of methods that are called at different points in an individual component's lifecycle.

We want to grab the data as soon as possible. There is a componentWillMount method, but for whatever reason it is not advisable to do fetches in here. Instead, we do the fetch in the componentDidMount method:

```js

class ListHotels extends Component {

  async componentDidMount() {
    const response = await fetch('http://localhost:3001/hotels')
    const myJson = await response.json();
    console.log(myJson);
  }

  render() {
    return (
      <div className="ListHotels">

      </div>
    );
  }
}
```

You should now see the blob of JSON data in the console: this is an array of hotel objects:

```js
[
  {name:"The Ritz", rating: 3, city: "London"},
  {name: "Another Hotel", rating: 4, city: "Peterborough"}
]
```

We will start by setting a blank state attribute called hotels that will be replaced by the data from the API:

```js
class ListHotels extends Component {

  state = {
    hotels: null,
  }

  ...

}

```

Inside our render method, we access our state attribute and display a loading message if it doesn't exist:

```js

render() {
  const {hotels} = this.state;

  if (!hotels) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="ListHotels">

      </div>
    );
  }
}

```

When the fetch returns our data, we are going to use React's setState method to update the state with the data from the URL:

```js

async componentDidMount() {
  const response = await fetch('http://localhost:3001/hotels')
  const myJson = await response.json();
  console.log(myJson);
  this.setState({hotels: myJson})
}

```

We can now render an instance of our Hotel component for each of the hotels in the array we are getting back from the API.

We use JavaScript's map method to loop through the array.

We pass in the values from each Hotel object into the array as props to the Hotel component.

```js

render() {
  const {hotels} = this.state;

  if (!hotels) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="ListHotels">
        {hotels.map(hotel => (
          <Hotel
            hotelName={hotel.name}
            hotelLocation={hotel.city}
            hotelRating={hotel.rating}
          />
        ))}
      </div>
    );
  }
}

```

This should now work! However, if you look in the JavaScript console you'll see an error. Turns out React wants you to add a "key" prop with a different value for each component:

```js

render() {
  const {hotels} = this.state;

  if (!hotels) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="ListHotels">
        {hotels.map((hotel, i) => (
          <Hotel
            key={i}
            hotelName={hotel.name}
            hotelLocation={hotel.city}
            hotelRating={hotel.rating}
          />
        ))}
      </div>
    );
  }
}


```
