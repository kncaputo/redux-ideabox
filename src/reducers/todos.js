export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), todo: action.todo, completed: false }];
    case 'TOGGLE_COMPLETE':
      return state.map(todo => {
        if (action.id === todo.id) {
          todo.complete = !todo.completed
        }
        return todo;
      });
    default:
      return state;
  }
}