require("dotenv/config");
/**
 * @description the cors i have to use on localserver and base url for the api
 */
let baseUrl = "https://api.mozambiquehe.re/";

/**
 * @description personal auth token
 */
let authTokenLocal = process.env.API_KEY;
/**
 *
 * @param {string} type what type of information you want to get from the api
 * @param {string} player if you want information about player this will be username
 * @param {string} platform the platform you want stats from, ex: PC, X1
 * @param {string} legend if you want leaderboard this should be the legend you want it about
 * @example ```js
 * let response = await apiFetch("player", "einar61", "PC")
 * ```
 */
async function apiFetch(
  type = "player",
  player = "",
  platform = "",
  legend = ""
) {
  let urlTosend = baseUrl;
  if (type === "player") {
    urlTosend += "bridge?" + `player=${player}&platform=${platform}`;
  } else if (type === "board") {
    urlTosend += "leaderboard?" + `legend=${legend}&platform=${platform}`;
  }
  let options = {
    method: "GET",
    headers: {
      Authorization: authTokenLocal ? authTokenLocal : authToken,
    },
  };
  try{
  let result = await fetch(urlTosend, options).then(
    async (response) => {
      if(response.ok){
        return response.json();
      }
      else{
        let parsedError = await response.json();
        throw new Error(parsedError.Error);
      }
    });
  return result;
}catch(error){
  return error;
}
}

module.exports = {
  apiFetch,
};
