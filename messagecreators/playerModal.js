let { EmbedBuilder } = require("discord.js");

function createModal(data) {
  let playerModal = new EmbedBuilder()
    .setColor(0x0099ff)
    .setTitle("testTitle")
    .setDescription("what should be here?")
    .addFields(
      { name: "first field", value: "first value" },
      { name: "second field", value: "second value", inline: true }
    )
    .setTimestamp()
    .setFooter({ text: "footer here" });
  return playerModal;
}

module.exports = {
  createModal,
};
