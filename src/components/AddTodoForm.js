import React, { Component } from 'react'

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  submitForm = (e) => {
    e.preventDefault()
    this.setState({ text: '' });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input
            value={this.state.text}
            placeholder="Add A Todo"
            onChange={this.handleChange} />
          <button>Add Todo</button>
        </form>
      </section>
    )
  }
}

export default AddTodoForm;
