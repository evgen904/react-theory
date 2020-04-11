import React from "react";

// компонент для отлова ошибок
// https://ru.reactjs.org/docs/error-boundaries.html

export default class ErrorBoundary extends React.Component {

  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    // данный метод будет вызван если его дети словили некоторый exception
    // даный компонент оборачивает все в себя и ловит ошибки, и красиво их выводит
    this.setState({hasError: true})
  }

  render() {
   // если есть ошибка вернем к примеру заголовок
   if (this.state.hasError) {
     return <h1 style={{color: '#c00'}}>Something went wrong</h1>
   }
   // а если ошибки нет, отобразим то что кладем внуторь данного компонента
   return this.props.children
  }
}
