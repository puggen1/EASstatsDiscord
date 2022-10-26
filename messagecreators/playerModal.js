let { EmbedBuilder } = require("discord.js");
function createModal(player) {
  let playerModal = new EmbedBuilder()
    .setColor(0x0099ff)
    .setTitle(player.name)
    .setDescription(`current legend: ${player.selectedLegend}`)
    .setThumbnail(player.selectedLegendIcon)
    .addFields(
      { name: "level", value: `${player.level}`, inline:true},
      { name: "percent to next level:", value: `${player.leverPercent}%`, inline: true },
      {name: "rank", value: `${player.rank} tier ${player.rankDivision}`},
    )
    .setTimestamp()
    .setFooter({ text: `brought to you by : EASstats` });
  return playerModal;
}

module.exports = {
  createModal,
};
