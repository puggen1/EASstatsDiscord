# EASstatsDiscord

a discord bot that can display diffrent information about apex legends.
with commands for player info, to map rotation and so on.

current version is not considered finished, i will keep updating with more commands and improve excisting features.

current version 0.3.3

## credit

this discord bot is created with discord.js(https://discord.js.org/#/) and apex legends api (https://apexlegendsapi.com/)
as well as other node packages.

all the data is fetched from the api and with some javascript added to display it to discord with discord.js.

## commands so far

playername for pc is the origin name! name that will show in the response will be steam name(if on steam) or origin.

/showplayer {playername} {platform}(PC standard other is PS4 X1)
gives info about the players name, level rank and last played legend

/showrank {playername} {platform}(PC standard other is PS4 X1)
gives the current rank and division of the player.

/isonline {playername} {platform}(PC standard other is PS4 X1)
shows if the player is online, if so it will tell if ingame, party status and joinable and current legend
