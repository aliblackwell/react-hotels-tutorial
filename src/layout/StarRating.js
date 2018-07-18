class StarRating extends React.Component {
  state = {
    stars: 3,
  }

  addStar = () => {
    const stars = this.state.stars;
    this.setState({stars: stars + 1});
  }

  removeStar = () => {
    const stars = this.state.stars;
    this.setState({stars: stars - 1});
  }

  render() {
    const {stars} = this.state;

    let ratingInStars = '';
    for (let i = 0; i < stars; i++) {
      ratingInStars += '⭐️ ';
    }

    return (
      <div className="StarRating">
        {ratingInStars}

        <button onClick={this.addStar}>+</button>
      </div>
    )
  }
}
