const Discord = require("discord.js");
const commando = require("discord.js-commando");
const bot = new commando.Client();

bot.registry.registerGroup("random", "Random");
bot.registry.registerGroup("info", "Info");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login("NjY2MzE3MjM4ODg1ODEwMTg2.XiItRw.O0hHKZOtQFgR5WeNpjsdHcnSjq0");