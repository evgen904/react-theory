// визде где используется JSX нужно импортировать React, т.к. собирается через createElement
import React from 'react';
import './App.css';
import Car from './Car/Car';

function App() {
  const divStyle = {
    textAlign: 'center'
  }
  return (
    // в JSX всегда должен быть корневой элемент
    // className это атрибут class
    <div style={divStyle}>
      <div className="App">
        <h1 style={{color: 'green', fontSize: '22px'}}>Hello World!</h1>
      </div>
      <p>Hello</p>
      <Car name={'Ford'} year={2018} />
      <Car name='Mazda' year={2010} />
      <Car name='Audi' year={2019} />
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
