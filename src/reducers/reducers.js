import { combineReducers } from 'redux';

const initialState = {
	leagues:[],
  teams: [],
  index: 0,
  teamNames: []
}


function handleError(state = false, action) {
    switch (action.type) {
        case 'ERROR':
            return action.error;
        default:
            return state;
    }
}

function handleLoading(state = false, action) {
    switch (action.type) {
        case 'LOADING':
            return action.loading;
        default:
            return state;
    }
}


//allowing users to add data related to their fav team

function teamNames (state = initialState, action) {
    switch (action.type) {
        case 'GETTEAMS':
      return Object.assign({}, state, {
        teamNames: [action.teams]
      })
        default:
            return state;
    }  
}

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
            leagueName: action.leagueName,
            index: state.index++,
            url: action.url
          }
        ]
      })
    case 'REMOVE_LEAGUE':
      return Object.assign({}, state, {
        leagues: state.leagues.filter((each)=>{return each.index !== action.index})
      })  
    case 'UPDATE_LEAGUES':
      return Object.assign({}, state, {
        leagues: state.leagues.map((each)=>{
          if (each.url === action.url) {
            const league = {league:action.data};
            return Object.assign({}, each, league);
          }
          else {
            return each;
          }
        }) 
      })   
    case 'RESET':
      return Object.assign({}, state, {
        leagues: []
      })  
    default:
      return state      
  }
}

//managing teams
function teams (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TEAM':
      return Object.assign({}, state, {
        teams: [
          ...state.teams,
          {
            teamInfo: action.teamInfo,
            teamPlayers: action.teamPlayers,
            teamFixtures: action.teamFixtures,
            index: state.index++
          }
        ]
      })
    case 'REMOVE_TEAM':
      return Object.assign({}, state, {
        teams: state.teams.filter((each)=>{return each.index !== action.index})
      })
    case 'UPDATE_TEAMPLAYERS':
          return Object.assign({}, state, {
        teams: state.teams.map((each)=>{
          if (each.teamInfo['_links'].players.href === action.url) {
            const players = {teamPlayers: action.data};
            return Object.assign({}, each, players);
          }
          else {
            return each;
          }
        }) 
      })
    case 'UPDATE_TEAMFIXTURES':
          return Object.assign({}, state, {
        teams: state.teams.map((each)=>{
          if (each.teamInfo['_links'].fixtures.href === action.url) {
            const fixtures = {teamFixtures: action.data};
            return Object.assign({}, each, fixtures);
          }
          else {
            return each;
          }
        }) 
      }) 
    case 'RESET':
      return Object.assign({}, state, {
        teams: []
      })                    
    default:
      return state      
  }
}


const app = combineReducers({
  leagues, teams, handleError, handleLoading, teamNames
})

export default app;