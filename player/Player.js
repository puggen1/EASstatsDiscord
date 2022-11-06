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
    this.rankDivision = player.global.rank.rankDiv = 0 ? "": player.global.rank.rankDiv;
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
   * @returns discord embed box showing if a player is online
   */
  onlineEmbed() {
    let onlineEmbed;
    if (this.isOnline) {
      onlineEmbed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle(`${this.name} is online :white_check_mark:`)
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
        .setTimestamp();
    } else {
      onlineEmbed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle(`${this.name} is offline :x:`)
        .setTimestamp();
    }

    return onlineEmbed;
  }
  /**
   *
   * @returns discord embed box with information about player
   */
  playerEmbed() {
    let division = "";
    if(this.rankDivision){
      division = `tier ${this.rankDivision}`;
    }
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
        { name: "\u200B", value: "\u200B", inline: true }
      )
      .setTimestamp()
      .setFooter({
        text: `Rank: ${this.rank} ${division}`,
        iconURL: `${this.rankImg}`,
      });
    return playerEmbed;
  }
  /**
   *
   * @returns discord embed box with information about player rank
   */
  rankEmbed() {
    let division = "";
    if(this.rankDivision){
      division = `tier ${this.rankDivision}`;
    }
    let rankEmbed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(`${this.name}'s rank is:`)
      .setDescription(`${this.rank} ${division}`)
      .setImage(`${this.rankImg}`)
      .setTimestamp();
    return rankEmbed;
  }
}

module.exports = {
  Player,
};
