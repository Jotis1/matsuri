const { DiscordAPIError } = require('discord.js')
const ytsr = require('ytsr')
const Discord = require('discord.js')
const embed = new Discord.MessageEmbed()
.setTitle("¿Puedes decirme que canal es el que quieres buscar?")
.setDescription("Ejemplo: `ma!yt Matsuri Natsuiro`.")
.setColor("ORANGE")

const embed2 = new Discord.MessageEmbed()
.setTitle("No he encontrado ningún resultado.")
.setDescription("Prueba otra vez o escríbelo de otra forma.")
.setColor("ORANGE")


module.exports = {
    nombre : 'youtube',
    alias: ['y', 'yt'],
    run : async(client, message, args) => {
        const query = args.join(" ")
        if(!query) return message.channel.send(embed).then(msg => msg.delete({timeout: 10000}));

        const res = await ytsr(query).catch(e => {
            return message.channel.send(embed2)
        });

        const video =  res.items.filter(i => i.type === "video")[0];
        if(!video) return message.channel.send("No he encontrado ningún resultado.");

        const embed3 = new Discord.MessageEmbed()
        .setTitle(video.title)
        .setImage(video.bestThumbnail.url)
        .setColor("ORANGE") 
        .setDescription(`**[Click para ir al video](${video.url})**`)
        .setAuthor(`Autor del vídeo: ${video.author.name}`)
        .addField("Visualizaciones: ", video.views.toLocaleString(), true)
        .addField("Duración: ", video.duration,)
        .setFooter("Desarrollado por: Hololive.")

        message.channel.send(embed3)
    }
}