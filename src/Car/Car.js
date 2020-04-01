import React from 'react';

export default props => (
  <div style={{
    display: 'inline-block',
    border: '1px solid #ccc',
    margin: '0 10px 10px 0',
    paddng: '10px',
    boxShadow: '0 4px 5px 0 rgba(0,0,0, .14)',
    borderRadius: '5px'
  }}>
    <h3>Car name: {props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
    <input type="text" onChange={props.onChangeName} value={props.name} />
    <button onClick={props.onDelete}>Delete</button>
  </div>
)
