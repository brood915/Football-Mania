import { combineReducers } from 'redux';

const initialState = {
	tasks:[]
}


//managing tasks. adding,removing, and moving
function tasks (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return Object.assign({}, state, {
        tasks: [
          ...state.tasks,
          {
            task: action.task,
            stage: 'ready'
          }
        ]
      })
    default:
      return state      
  }
}



const app = combineReducers({
  tasks
})

export default app;