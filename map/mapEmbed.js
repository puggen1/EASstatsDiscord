let { EmbedBuilder } = require("discord.js");

function createEmbed(mapInfo) {
  let {
    map = mapInfo.current.map,
    remaining = mapInfo.current.remainingTimer,
    image = mapInfo.current.asset,
    nextMap = mapInfo.next.map,
  } = mapInfo;
  let mapEmbed = new EmbedBuilder()
    .setColor(0x0099ff)
    .setTitle(`current map is: ${map}`)
    .setDescription(`time left: ${remaining}`)
    .setImage(`${image}`)
    .setFooter({ text: `next map is: ${nextMap}` });
  return mapEmbed;
}

module.exports = {
  createEmbed,
};
