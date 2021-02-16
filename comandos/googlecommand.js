const { DiscordAPIError } = require('discord.js')
const img = require('images-scraper')
const Discord = require('discord.js')
const google = new img({
    puppeteer : {
        headless : true,
    }
})

const embed = new Discord.MessageEmbed()
.setTitle("¿Puedes decirme que imagen es la que quieres buscar?")
.setDescription("Ejemplo: `ma!i Matsuri Natsuiro`.")
.setColor("ORANGE")
const embed1 = new Discord.MessageEmbed()
.setDescription("Buscando...")
.setColor("ORANGE")

module.exports = {
    nombre : 'image',
    alias: ['im', 'i'],
    run : async(client, message, args) => {
        const query = args.join(" ")
        if(!query) return message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))


        message.channel.send(embed1).then(msg => msg.delete({timeout: 4000}))
        const results = await google.scrape(query, 1)
        const embed2 = new Discord.MessageEmbed()
        .setTitle(`Aquí tienes tu imagen de ${query}`)
        .setImage(`${results[0].url}`)
        .setColor("ORANGE")
        .setFooter("Desarrollado por: Hololive")
        message.channel.send(embed2);
    }
}