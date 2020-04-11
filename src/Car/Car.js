import React from 'react';
import classes from './Car.module.scss';
import withClass from '../hoc/withClass'

// https://ru.reactjs.org/docs/typechecking-with-proptypes.html
import PropTypes from 'prop-types'

// В реакте лучше чаще использовать функциональные компоненты, т.к. они занимают меньше ресурсов для отрисовки,
// обычно React.Component идет основным с хуками, а внутри уже функциональные компоненты

class Car extends React.Component {

  constructor(props) {
    super(props);

    this.inputRef = React.createRef()
  }

  componentDidMount() {
    if (this.props.index === 1) {
      //this.inputRef.focus()
      this.inputRef.current.focus()
    }
  }

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

    // ref={(inputRef) => this.inputRef = inputRef}
    return (
      <React.Fragment>
        <h3>Car name: {this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input
          ref={this.inputRef}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </React.Fragment>
    )
  }
}

Car.propTyps = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onChangetTitle: PropTypes.func,
  onDelete: PropTypes.func,
}

export default withClass(Car, classes.Car);
