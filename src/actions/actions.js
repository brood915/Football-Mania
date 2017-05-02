import { ADD_TASK } from './actionTypes';


//action creators
export function addTask(task) {
  return { type: ADD_TASK, task }
}
