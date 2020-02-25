const commando = require('discord.js-commando');

class ppt extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'ppt',
      group: 'random',
      memberName: 'ppt',
      description: 'Juega piedra papel tijera con el SolarBot'
    });
  }

  async run(message,args) {
    const random = Math.floor(Math.random() * 3) + 1;
    var res = null;

    if (message.content.startsWith(args) || message.author.bot) return;

    switch (random) {
      case 1:
        await message.channel.send("1");
        break;
      case 2:
        await message.channel.send("2");
        break;
      case 3:
        await message.channel.send("3");
        break;
    }

  }
}

module.exports = ppt;