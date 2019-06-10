import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this);
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    let arr = this.state.cars;
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {arr.map((car, id) => {
          console.log(car);
           return <div key={id}>
            <ul>
              <li>MAKE: {car.make}</li>
              <li>MODEL: {car.model}</li>
              <li>YEAR: {car.year}</li>
              <li>COLOR: {car.color}</li>
            </ul>
           </div>
        })}
      </div>
    );
  }
}

export default App;
