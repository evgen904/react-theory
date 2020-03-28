// визде где используется JSX нужно импортировать React, т.к. собирается через createElement
import React from 'react';
import './App.css';

function App() {
  return (
    // в JSX всегда должен быть корневой элемент
    // className это атрибут class
    <div>
      <div className="App">
        <h1>Hello World!</h1>
      </div>
      <p>Hello</p>
    </div>    
  );

  // интерпритатор реакт запись выше, посути реализует так:
  // return React.createElement(
  //   'div',
  //   {
  //     className: 'App'
  //   },
  //   React.createElement(
  //     // название тега
  //     'h1',
  //     // пропсы 
  //     null,
  //     // содержимое текста
  //     'Hello world !'
  //   )
  // )
}

export default App;
