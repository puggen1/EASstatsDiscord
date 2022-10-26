class Player {
    constructor(player) {
        this.name = player.global.name;
        this.level = player.global.level;
        this.leverPercent = player.global.toNextLevelPercent;
        this.rank = player.global.rank.rankName;
        this.rankImg = player.global.rank.rankImg;
        this.rankDivision = player.global.rank.rankDiv;
        this.selectedLegend = player.legends.selected.LegendName;
        this.selectedLegendIcon = player.legends.selected.ImgAssets.icon;
        this.selectedLegendBanner = player.legends.selected.ImgAssets.banner;
    }
   
}

module.exports = {
    Player
};