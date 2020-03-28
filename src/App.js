// визде где используется JSX нужно импортировать React, т.к. собирается через createElement
import React from 'react';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <h1>Hello World!</h1>
  //   </div>
  // );

  // интерпритатор реакт запись выше, посути реализует так:
  return React.createElement(
    'div',
    {
      className: 'App'
    },
    React.createElement(
      // название тега
      'h1',
      // пропсы 
      null,
      // содержимое текста
      'Hello world !'
    )
  )
}

export default App;
