import React from 'react';
import'./display.css';
import Bullet from "./bullet"
import PropTypes from 'prop-types';

export default class Todos extends React.Component{
    render(){
        console.log(this.props.todos)
  return this.props.todos.map((todo) => (
<Bullet key={todo.id} todo={todo} />
  )
  );
}
}
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}