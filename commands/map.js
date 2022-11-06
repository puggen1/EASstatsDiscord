const { SlashCommandBuilder } = require("discord.js");
let mapEmbed = require("../map/mapEmbed");

let apiFunctions = require("../api/apiFunctions");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("map")
    .setDescription("shows map information"),
  async execute(interaction) {
    let response = await apiFunctions.getMap();
    if (response.current === undefined) {
      let responseToDisplay = response.Error ? response.Error : response;
      await interaction.reply(`${responseToDisplay}`);
      return;
    } else {
      let createdEmbed = mapEmbed.createEmbed(response);
      await interaction.reply({ embeds: [createdEmbed] });
    }
  },
};
