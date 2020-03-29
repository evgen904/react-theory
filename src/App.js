import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2010},
      {name: 'Mazda', year: 2018},
      {name: 'Audi', year: 2020}
    ],
    pageTitle: 'React components',
    showCars: false
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  hendleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  changeTitleHandler = (pageTitle) => {
    this.setState({
      pageTitle
    })
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return(
          <Car 
            key={index}
            name={car.name}
            year={car.year}
            onChangetTitle={() => this.changeTitleHandler(car.name)}
          />
        )
      })
    }

    return (
      <div style={divStyle}>
        <div className="App">
          <h1 style={{color: 'green', fontSize: '22px'}}>
           {this.state.pageTitle}
          </h1>

          <input type="text" onChange={this.hendleInput} />

          <button onClick={this.toggleCarsHandler}>Toggle cars</button>

          { cars }

          {/* {
            this.state.showCars
              ? this.state.cars.map((car, index) => {
                return(
                  <Car 
                    key={index}
                    name={car.name}
                    year={car.year}
                    onChangetTitle={() => this.changeTitleHandler(car.name)}
                  />
                )
              })
              : null
          } */}
        </div>
      </div>
    );
  }
}

export default App;
