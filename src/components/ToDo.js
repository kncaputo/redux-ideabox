import React from 'react';
import { connect } from 'react-redux';
import { toggleComplete } from '../actions';

const ToDo = ({ id, todo, complete, toggleComplete }) => {
 
  return(
    <li>
      <p className={complete ? 'completed' : 'not-completed'}>{todo}</p>
      <button onClick={() => toggleComplete(id)}>{complete ? 'Done!' : 'Done?'}</button>
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleComplete: id => dispatch ( toggleComplete(id))
})

export default connect(null, mapDispatchToProps)(ToDo);