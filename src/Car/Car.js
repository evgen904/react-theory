import React from 'react';
//import Radium from 'radium';
import classes from './Car.module.scss';

// В реакте лучше чаще использовать функциональные компоненты, т.к. они занимают меньше ресурсов для отрисовки,
// обычно React.Component идет основным с хуками, а внутри уже функциональные компоненты

class Car extends React.Component {

  // жизненые циклы компонента

  componentWillReceiveProps(nextProps) {
    // преднозначен для синхронизации локального стейта, если он есть, с входящими свойствами
    // используется редко
    console.log('Car componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // здесь мы можем оптимизировать наше приложение
    // если возвращем true то компонент должен измениться, т.е. перерисовать
    console.log('Car shouldComponentUpdate', nextProps, nextState);
    //shouldComponentUpdate должен что-то вернуть
    return nextProps.name.trim() !== this.props.name.trim()
  }

  componentWillUpdate(nextProps, nextState) {
    // знаем что компонент будет изменен, готовимся к его изменению
    // также можно синхронизировать локальный state, если он есть, с параметрами которые будут входить, и т.д.
    console.log('Car componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('Car componentDidUpdate');
  }

  render() {
    // после подготовки компонента, происходит его рендер
    console.log('Car render');

    const inputClasses = [classes.input];

    if (this.props.name !== '') {
      inputClasses.push(classes.green);
    } else {
      inputClasses.push(classes.red);
    }

    if (this.props.name.length > 4) {
      inputClasses.push(classes.bold);
    }

    const Style = {
      border: '1px solid #ccc',
      boxShadow: '0 4px 5px 0 rgba(0,0,0, .14)',
      ':hover': {
        border: '1px solid #aaa',
        boxShadow: '0 4px 15px 0 rgba(0,0,0, .25)',
      }
    }

    return (
      <div className={classes.Car} style={Style}>
        <h3>Car name: {this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    )
  }
}

export default Car;
