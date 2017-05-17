import { ADD_LEAGUE, REMOVE_LEAGUE, ADD_TEAM, REMOVE_TEAM } from './actionTypes';


//action creators for leagues
export function addLeague(league, types) {
  return { type: ADD_LEAGUE, league, types }
}

export function removeLeague(index) {
  return { type: REMOVE_LEAGUE, index }
}



//action creators for teams
export function addTeam(teamInfo, teamData) {
  return { type: ADD_TEAM, teamInfo, teamData }
}

export function removeTeam(index) {
  return { type: REMOVE_TEAM, index }
}