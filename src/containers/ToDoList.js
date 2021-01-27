import React from 'react';
import Todo from '../components/ToDo';
import { connect } from 'react-redux';

const ToDoList = ({todos}) => {
  const displayTodos = todos.map(todo => {
    return(
      <Todo 
        {...todo}
        key={todo.id}
      />
    )
  })

  return(
    <section>
      <h2>To Do:</h2>
      <ul>
        {displayTodos}
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(ToDoList);