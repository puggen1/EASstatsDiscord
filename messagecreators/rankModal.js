let { EmbedBuilder } = require("discord.js");
function createModal(player) {
  let playerModal = new EmbedBuilder()
  .setColor(0x0099ff)
  .setTitle(`${player.name}'s rank is:`)
  .setDescription(`${player.rank} tier: ${player.rankDivision}`)
  .setImage(`${player.rankImg}`);
  return playerModal;
}

module.exports = {
    createModal
}