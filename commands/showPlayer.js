const { SlashCommandBuilder } = require("discord.js");
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
    ),
  async execute(interaction) {
    let username = interaction.options.getString("username");
    let platform = interaction.options.getString("platform") ?? "PC";
    console.log(username, platform);
    let response = await apiFunctions.getPlayer(username, platform);
    console.log(response);
    await interaction.reply(`test ${response}`);
  },
};
