import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from "./Counter/Counter";

class App extends Component {

  constructor(props) {
    //console.log('App constructor, Вызывается первый но к апи реакта не относится, к бэку стучаться не надо тут');

    super(props);

    this.state = {
      cars: [
        {name: 'Ford', year: 2010},
        {name: 'Mazda', year: '2018'},
        {name: 'Audi', year: 2020}
      ],
      pageTitle: 'React components',
      showCars: false
    }
  }

  // state = {
  //   cars: [
  //     {name: 'Ford', year: 2010},
  //     {name: 'Mazda', year: 2018},
  //     {name: 'Audi', year: 2020}
  //   ],
  //   pageTitle: 'React components',
  //   showCars: false
  // }

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

  // componentWillMount() {
  //   //console.log('App componentWillMount, первый жизненый цикл реакта, вызывается до отрисовки компонента стейта нет, к бэкенду стучаться не надо');
  // }

  componentDidMount() {
    //console.log('App componentDidMount, после отрисовки компонента, обычно все тут вызывается');
  }

  render() {

    //console.log('App render, рендер компонента');

    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return(
          <ErrorBoundary key={index}>
            <Car
              index={index}
              name={car.name}
              year={car.year}
              onChangetTitle={() => this.changeTitleHandler(car.name)}
              onChangeName={event => this.onChangeName(event.target.value, index)}
              onDelete={this.deleteHandler.bind(this, index)}
            />
          </ErrorBoundary>
        )
      })
    }

    return (
      <div style={divStyle}>
        <div className="App">
          <h1 style={{color: 'green', fontSize: '22px'}}>
           {this.props.title}
          </h1>

          <Counter />

          <hr/>

          <button style={{marginTop: '20px'}} onClick={this.toggleCarsHandler}>Toggle cars</button>
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
