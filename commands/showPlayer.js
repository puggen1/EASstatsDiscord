/**
 * @description a discord command that will show information about a player, or give error if player does not excist
 */
const { SlashCommandBuilder } = require("discord.js");
let player = require("../player/Player");
let apiFunctions = require("../api/apiFunctions");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("showplayer")
    .setDescription("gives info about an apex legends player")
    .addStringOption((option) =>
      option
        .setName("username")
        .setDescription("the user you want info about")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("platform")
        .setDescription("the platform the player plays on, default is PC")
        .setRequired(false)
    ),
  async execute(interaction) {
    let username = interaction.options.getString("username");
    let platform = interaction.options.getString("platform") ?? "PC";
    let response = await apiFunctions.getPlayer(username, platform);
    if (response.global === undefined) {
      let responseToDisplay = response.Error ? response.Error : response;
      await interaction.reply(`${responseToDisplay}`);
      return;
    } else {
      let thisPlayer = new player.Player(response);
      let createdModal = thisPlayer.playerEmbed();
      await interaction.reply({ embeds: [createdModal] });
    }
  },
};
