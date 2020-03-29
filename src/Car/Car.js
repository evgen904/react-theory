import React from 'react';

export default props => (
  <div style={{
    display: 'inline-block',
    border: '1px solid #ccc',
    margin: '0 10px 10px 0',
    paddng: '10px'
  }}>
    <h3>Car name: {props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
    <input type="text" onChange={props.onChangeName} value={props.name} />
    <button onClick={props.onDelete}>Delete</button>
  </div>  
)