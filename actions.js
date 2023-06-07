// redux/actions.js

export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: task,
  };
};

export const removeTask = () => {
  return {
    type: 'REMOVE_TASK',
  };
};

export const toggleComplete = (taskId) => {
  return {
    type: 'TOGGLE_COMPLETE',
    payload: taskId,
  };
};
