const Discord = require('discord.js');
const embed1 = new Discord.MessageEmbed()
.setDescription("Introduce un texto.")
.setColor("ORANGE")

module.exports = {
    nombre : 'embedanonimo',
    alias: ['ea', 'ema'],
    run : async(client, message, args) => {
        const query = args.join(" ")
        if(!query) return message.channel.send(embed1).then(msg => msg.delete({timeout: 5000}))
        const embed = new Discord.MessageEmbed()
        .setTitle(query)
        .setColor("ORANGE")

        
        message.delete()
        message.channel.send(embed)
    }
}