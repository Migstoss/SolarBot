const commando = require('discord.js-commando');

class motivacion extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'motivacion',
            group: 'random',
            memberName: 'motivacion',
            description: 'Frase inspiradora de uno de los mayores economistas del multiverso'
        });
    }

    async run(message,args) {
        const random = Math.floor(Math.random() * 4) + 1;

        if (random == 1){
            await message.channel.send("Pa atrás ni para coger impulso");
        }else if (random === 2){
            await message.channel.send("SIEMPRE ADELANTE");
        }else if (random === 3){
            await message.channel.send("Mirar siempre al futuro, siempre arriba, siempre adelante");
        }else if (random === 4){
            await message.channel.send("Solo confía hermano, CONFÍA");
        }else if (random === 5){
            await message.channel.send("5");
        }else if (random === 6){
            await message.channel.send("6");
        }
    }


}

module.exports = motivacion;