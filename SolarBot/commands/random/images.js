const commando = require('discord.js-commando');

class images extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'foto',
      group: 'random',
      memberName: 'imagen',
      description: 'Muestra una imagen aleatoria'
    });
  }

  async run(message,args) {
    const number = 50;
    const imageNumber = Math.floor(Math.random() * number) + 1;

    await message.channel.send({ files: ["./assets/images/" + imageNumber + ".jpg"] });
  }
}

module.exports = images;