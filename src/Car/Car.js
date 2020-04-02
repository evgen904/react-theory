import React from 'react';
import Radium from 'radium';
import classes from './Car.module.scss';

// В реакте лучше чаще использовать функциональные компоненты, т.к. они занимают меньше ресурсов для отрисовки,
// обычно React.Component идет основным с хуками, а внутри уже функциональные компоненты

class Car extends React.Component {
  render() {
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

export default Radium(Car);
