import { ADD_LEAGUE, REMOVE_LEAGUE, ADD_TEAM, REMOVE_TEAM } from './actionTypes';


//action creators for leagues
export function addLeague(league, types, leagueName) {
  return { type: ADD_LEAGUE, league, types, leagueName }
}

export function removeLeague(index) {
  return { type: REMOVE_LEAGUE, index }
}



//action creators for teams
export function addTeam(teamInfo, teamPlayers, teamFixtures) {
  return { type: ADD_TEAM, teamInfo, teamPlayers, teamFixtures }
}

export function removeTeam(index) {
  return { type: REMOVE_TEAM, index }
}