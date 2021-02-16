const Discord = require('discord.js')

module.exports = {
    nombre: "help",
    alias: ["commands", "help me", "pls help"],
    run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle("AYUDA")
        .setColor("ffbb00")
        .setFooter(`Pedido por: ${message.author.tag}`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .addField('`ma!animeinfo/ai/ainfo <Nombre del anime>`',' Te dice los detalles de un anime.', false)
        .addField('`ma!youtube/y/yt <Nombre del vídeo>`',' Busca un vídeo de YouTube por su nombre.', false)
        .addField('`ma!image/i/im <Lo que quieras>`',' Buscas una imagen de lo que quieras en Google.', false)
        .addField('`ma!mangainfo/mi/minfo <Nombre del manga>`','Te dice los detalles de un manga.', false)
        .addField('`ma!embed/e/em <Lo que quieras>`',' Lo que escribes se covierte en un embed.', false)
        .addField('`ma!embedanonimo/ea/ema <Lo que quieras>`',' Lo que escribes se covierte en un embed pero anónimo.', false)
        return message.channel.send(embed)

    
    }
}