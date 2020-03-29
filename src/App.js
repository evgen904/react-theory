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
    pageTitle: 'React components'
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  hendleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {

    console.log('render');    

    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars;

    return (
      <div style={divStyle}>
        <div className="App">
          <h1 style={{color: 'green', fontSize: '22px'}}>
           {this.state.pageTitle}
          </h1>

          <input type="text" onChange={this.hendleInput} />

          <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>

          <Car 
            name={cars[0].name} 
            year={cars[0].year}
            onChangetTitle={this.changeTitleHandler.bind(this, cars[0].name)}
          />
          <Car 
            name={cars[1].name} 
            year={cars[1].year} 
            onChangetTitle={() => this.changeTitleHandler(cars[1].name)}
          />
          <Car 
            name={cars[2].name} 
            year={cars[2].year} 
            onChangetTitle={() => this.changeTitleHandler(cars[2].name)}
          />
        </div>
      </div>
    );
  }
}

export default App;
