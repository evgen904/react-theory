import React, {Component} from "react";
import Auxiliary from '../hoc/Auxiliary'
import Counter2 from "../Counter2/Counter2";


export default class Counter extends Component {

  state = {
    counter: 0
  }

  addCounter = () => {

    // setState яв-тя асинхронным
    // чтобы работать с предыдущем значением, избежам тем самым если вдруг стейт гдето поменялся, используем prevState
    // this.setState({
    //   counter: this.state.counter + 1
    // })

    // защищены от других асинхроных операция, и работаем с предыдещем значением
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })

  }

  render() {
    return (
      <Auxiliary>
        <h2>Counter {this.state.counter}</h2>
        <Counter2 />
        {/*<Counter2 clicked={this.props.clicked} />*/}
        <button onClick={this.addCounter}>+</button>
        <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
      </Auxiliary>
    )

    // return (
    //   <>
    //     <h2>Counter {this.state.counter}</h2>
    //     <button onClick={this.addCounter}>+</button>
    //     <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
    //   </>
    // )

    // return (
    //     <React.Fragment>
    //       <h2>Counter {this.state.counter}</h2>
    //       <button onClick={this.addCounter}>+</button>
    //       <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
    //     </React.Fragment>
    // )

    // return [
    //   <h2 key={'1'}>Counter {this.state.counter}</h2>,
    //   <button key={'2'} onClick={this.addCounter}>+</button>,
    //   <button key={'3'} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
    // ]
  }
}
