let { EmbedBuilder } = require("discord.js");
/**
 * @description creates a player with all the information given by api, some of the constructiors are just a shortcut for now
 * @example ```js
 * let player = new Player(data);
 * ```
 */
class Player {
  constructor(player) {
    this.allData = player;
    this.realtime = player.realtime;
    this.name = player.global.name;
    this.level = player.global.level;
    this.leverPercent = player.global.toNextLevelPercent;
    this.rank = player.global.rank.rankName;
    this.rankImg = player.global.rank.rankImg;
    this.rankDivision = player.global.rank.rankDiv;
    this.selectedLegend = player.legends.selected.LegendName;
    this.isOnline = player.realtime.isOnline;
    this.selectedLegendIcon = player.legends.selected.ImgAssets.icon.includes(
      " "
    )
      ? player.legends.selected.ImgAssets.icon.replace(" ", "%20")
      : player.legends.selected.ImgAssets.icon;
    this.selectedLegendBanner =
      player.legends.selected.ImgAssets.banner.includes(" ")
        ? player.legends.selected.ImgAssets.banner.replace(" ", "%20")
        : player.legends.selected.ImgAssets.banner;
  }
  /**
   * 
   * @returns discord embed box showin if a player is online
   */
  onlineEmbed() {
    let onlineEmbed;
    if (this.isOnline) {
      onlineEmbed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle(`${this.name} is online`)
        .setDescription(
          `current legend: ${
            this.selectedLegend === this.realtime.selectedLegend
              ? this.selectedLegend
              : this.realtime.selectedLegend
          }`
        )
        .addFields(
          {
            name: "ingame",
            value: `${this.realtime.isInGame ? "yes" : "no"}`,
            inline: true,
          },
          {
            name: "can join",
            value: `${this.realtime.canJoin ? "yes" : "no"}`,
            inline: true,
          },
          {
            name: "lobby full",
            value: `${this.realtime.partyFull ? "yes" : "no"}`,
            inline: true,
          }
        )
        .setThumbnail(
          this.selectedLegend === this.realtime.selectedLegend
            ? this.selectedLegendIcon
            : ""
        )
        .setTimestamp()
        .setFooter({ text: `brought to you by : EASstats` });
    } else {
      onlineEmbed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle(`${this.name} is offline`)
        .setTimestamp()
        .setFooter({ text: `brought to you by : EASstats` });
    }

    return onlineEmbed;
  }
  /**
   * 
   * @returns discord embed box with information about player
   */
  playerEmbed() {
    let playerEmbed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(this.name)
      .setDescription(`current legend: ${this.selectedLegend}`)
      .setThumbnail(this.selectedLegendIcon)
      .addFields(
        { name: "level", value: `${this.level}`, inline: true },
        {
          name: "percent to next level:",
          value: `${this.leverPercent}%`,
          inline: true,
        },
        { name: "\u200B", value: "\u200B" },
        {
          name: "rank",
          value: `${this.rank} tier ${this.rankDivision}`,
          inline: true,
        }
      )
      .setTimestamp()
      .setFooter({ text: `brought to you by : EASstats` });
    return playerEmbed;
  }
  /**
   * 
   * @returns discord embed box with information about player rank
   */
  rankModal() {
    let rankEmbed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(`${this.name}'s rank is:`)
      .setDescription(`${this.rank} tier: ${this.rankDivision}`)
      .setImage(`${this.rankImg}`);
    return rankEmbed;
  }
}

module.exports = {
  Player,
};
