import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch("https://api.coinlore.com/api/tickers/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.data
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    const { error, isLoaded, data } = this.state;
    
    if (error) {
      return <div>Error: {error.message} </div>
    } else if (!isLoaded) {
      return <div>Currently Loading...</div>
    } else {
      return (
        <ul>
          {data.map(coin => (
            <li key={coin.name}>
              <h1>{coin.name}</h1>
              <div>
                <p>{coin.price_usd}</p>
              </div>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default App;
