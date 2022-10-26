let apiCall = require("./apiCall");
/**
 *
 * @param {string} username the username of the player you want stats about
 * @param {string} platform the platform this playes plays on
 * @example ```js
 * let player = await getPlayer("einar61", "PC");
 * ```
 * @returns all player stats
 */
async function getPlayer(username, platform) {
  let player = await apiCall.apiFetch("player", username, platform);
  return player;
}

/**
 * @description does not yet work
 * @param {string} legend the legend you want a leaderboard about
 * @param {string} platform the platform the leaderboard should use information from
 * @example```js
 * let board = await getBoard("Wraith", "PC")
 * ```
 */
async function getBoard(legend, platform) {
  let board = await apiCall.apiFetch("board", "", platform, legend);
  console.log(board);
}
module.exports = {
  getPlayer,
  getBoard,
};
