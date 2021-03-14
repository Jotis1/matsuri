const Discord  = require('discord.js');
module.exports = {
    nombre: "richembed",
    alias: "re",
    
    run: async(client, message, args) => {
        message.delete().catch()

        const error = new Discord.MessageEmbed()
        .setTitle("ERROR")
        .setDescription(`<@${message.author.id}> así no es como funciona...`)
        .setColor("fc0002")
        .addField("Ejemplo", "`t!re --Título --Descripción --[Link] --Color`", inline= false)
        .addField("Colores", "Tienen que ser el color en inglés y en mayúsculas como: `ORANGE`", inline= false)

        const contenido = message.content.split('--')
        const título = contenido[1]
        const descripción = contenido[2]
        const Imagen = contenido[3]
        const Color = contenido[4]

        if(!título) return message.channel.send(error).then(msg=>msg.delete({ timeout: 40000 }))
        if(!descripción) return message.channel.send(error).then(msg=>msg.delete({ timeout: 40000 }))
        if(!Imagen) return message.channel.send(error).then(msg=>msg.delete({ timeout: 40000 }))
        if(!Color) return message.channel.send(error).then(msg=>msg.delete({ timeout: 40000 }))

        const embed = new Discord.MessageEmbed()
        .setTitle(título)
        .setDescription(descripción)
        .setImage(Imagen)
        .setColor(`${Color}`)


        message.channel.send(embed)
    }
}