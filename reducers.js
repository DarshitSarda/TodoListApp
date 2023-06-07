// redux/reducers.js

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: [],
      };
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return {
              ...task,
              completed: !task.completed,
            };
          }
          return task;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
