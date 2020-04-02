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

  changeTitleHandler = (pageTitle) => {
    this.setState({
      pageTitle
    })
  }

  onChangeName(name, index) {
    // сначала берем текущие данные со стейта
    // ложим в переменную, меняем нужне значение
    const car = this.state.cars[index]
    car.name = name

    // потом заного получаем весь список массива
    // в нем меняем нужный элемент массива
    // и после этого сетим массив
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars})
  }

  deleteHandler(index) {
    // чтобы вызвать такой метод, его нужно байндить
    // this.deleteHandler.bind(this, index)
    // чтобы функция не брала свой контекст this

    // либо ее вызывать через стрелочную функцию
    // () => this.deleteHandler(index)
    const cars = [...this.state.cars]
    cars.splice(index, 1)
    this.setState({cars})
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
            onChangeName={event => this.onChangeName(event.target.value, index)}
            onDelete={this.deleteHandler.bind(this, index)}
          />
        )
      })
    }

    return (
      <div style={divStyle}>
        <div className="App">
          <h1 style={{color: 'green', fontSize: '22px'}}>
           {this.props.title}
          </h1>
          <button onClick={this.toggleCarsHandler}>Toggle cars</button>
          <div style={{
            width: 400,
            margin: 'auto',
            paddingTop: '20px'
          }}>
            { cars }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
