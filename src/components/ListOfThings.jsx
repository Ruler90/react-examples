import React from 'react';

const ListOfThings = (props) => {
  const things = props.todos.map(item => (
    <li key={item.id} onClick={props.someCoolFn}>{item.value}</li>
  ));
  return (
    <ul>{things}</ul>
  );
};

export default ListOfThings;
