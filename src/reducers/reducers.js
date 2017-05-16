import { combineReducers } from 'redux';

const initialState = {
	leagues:[],
  teams: []
}

let index = 0;

//managing leagues
function leagues (state = initialState, action) {
  switch (action.type) {
    case 'ADD_LEAGUE':
      return Object.assign({}, state, {
        leagues: [
          ...state.leagues,
          {
            league: action.league,
            type: action.types,
            index: index++
          }
        ]
      })
    case 'REMOVE_LEAGUE':
      return Object.assign({}, state, {
        leagues: state.leagues.filter((each)=>{return each.index !== action.index})
      })      
    default:
      return state      
  }
}

//managing teams
function teams (state = initialState, action) {
  let index = 0;
  switch (action.type) {
    case 'ADD_TEAM':
      return Object.assign({}, state, {
        leagues: [
          ...state.teams,
          {
            league: action.team,
            index: index++
          }
        ]
      })
    case 'REMOVE_TEAM':
      return Object.assign({}, state, {
        teams: state.teams.filter((each)=>{return each.index !== action.index})
      })      
    default:
      return state      
  }
}


const app = combineReducers({
  leagues, teams
})

export default app;