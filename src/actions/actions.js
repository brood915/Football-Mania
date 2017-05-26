import { ADD_LEAGUE,
        REMOVE_LEAGUE, 
        ADD_TEAM, 
        REMOVE_TEAM, 
        UPDATE_LEAGUES, 
        UPDATE_TEAMS,
        LOADING,
        ERROR
        } from './actionTypes';



//action creators for leagues
export function addLeague(league, types, leagueName, url) {
  return { type: ADD_LEAGUE, league, types, leagueName, url }
}

export function removeLeague(index) {
  return { type: REMOVE_LEAGUE, index }
}



//action creators for teams
export function addTeam(teamInfo, teamPlayers, teamFixtures,url) {
  return { type: ADD_TEAM, teamInfo, teamPlayers, teamFixtures, url }
}

export function removeTeam(index) {
  return { type: REMOVE_TEAM, index }
}

export function updateLeagues (data, url) {
  return {type: UPDATE_LEAGUES, data, url}
}

export function updateTeams (data, url) {
  return {type: UPDATE_TEAMS, data, url}
}

export function handleError(bool) {
         return {
          type: ERROR,
          error: bool
         }
}

export function handleLoading(bool) {
         return {
          type: LOADING,
          loading: bool
         }
}

//action creator with redux thunk
export function update (urls) {
  return (dispatch) => {
        dispatch(handleLoading(true));

         Promise.all(urls.map(each => fetch(each, {
  		headers: {
         		'X-Auth-Token': '93ec85906d8a472894cad03fdadb19b9'
  			}
		})
         .then((response)=>response.json())
         .then((data) => {

        if (data.fixtures || data.standing) { //if either fixtures/standing data available
          dispatch(updateLeagues(data, each));
        }

         })))
         .then(()=> dispatch(handleLoading(false)))
         .catch(() => dispatch(handleError(true)))
  } 
}