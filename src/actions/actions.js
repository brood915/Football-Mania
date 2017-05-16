import { ADD_LEAGUE, REMOVE_LEAGUE } from './actionTypes';


//action creators for leagues
export function addLeague(league, types) {
  return { type: ADD_LEAGUE, league, types }
}

export function removeLeague(index) {
  return { type: REMOVE_LEAGUE, index }
}



//action creators for teams
export function addTeam(team) {
  return { type: ADD_TEAM, team }
}

export function removeTeam(index) {
  return { type: REMOVE_TEAM, index }
}