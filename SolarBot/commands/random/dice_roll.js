const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Lanza un dado, nada mas'
        });
    }

    async run(message,args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        await message.channel.send("Roleaste un " + roll);
    }


}

module.exports = DiceRollCommand;