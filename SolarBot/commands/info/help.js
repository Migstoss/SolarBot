const commando = require('discord.js-commando');

class info extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ayuda',
            group: 'info',
            memberName: 'ayuda',
            description: 'Información del bot'
        });
    }

    async run(message,args) {
        message.reply("Información del bot");
    }


}

module.exports = info;