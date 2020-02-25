const Discord = require('discord.js');
const client = new Discord.Client({
  disableEveryone: true
});
const { prefix, token } = require('./config.json');

client.once('ready', () => {
  console.log('Ready');
});

client.on('message', message => {

  //Ping beep
  if (message.content.startsWith(`${prefix}ping`)){
    message.channel.send('!ping');
  }else if (message.content.startsWith(`${prefix}beep`)){
    message.channel.send('boop');
  }

  //Dados
  if (message.content.startsWith(`${prefix}roll`)){
    const value = Math.floor(Math.random() * 6) + 1;

    switch (value) {
      case 1: message.channel.send("1");
        break;
      case 2: message.channel.send("2");
        break;
      case 3: message.channel.send("3");
        break;
      case 4: message.channel.send("4");
        break;
      case 5: message.channel.send("5");
        break;
      case 6: message.channel.send("6");
        break;
    }
  }


});

client.login(token);