const { get } = require('request-promise-native')
const Discord = require('discord.js')
const embed = new Discord.MessageEmbed()
.setTitle("¿Puedes decirme que info de anime es la que quieres buscar?")
.setDescription("Ejemplo: `ma!ai Shingeki No Kyojin`.")
.setColor("ORANGE")

const embed1 = new Discord.MessageEmbed()
.setDescription("Buscando...")
.setColor("ORANGE")

module.exports = {
    nombre : 'animeinfo',
    alias: ['ai', 'ainfo'],
    run : async(client, message, args) => {
        const query = args.join(" ")
        if(!query) return message.channel.send(embed).then(msg => msg.delete({timeout: 10000}));


        let option = {
            url: `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`,
            method: `GET`,
            headers: {
                'Content-Type': "application/vnd.api+json",
                'Accept': "application/vnd.api+json",
            },
            json: true
        }
        message.channel.send(embed1).then(msg=> {
            get(option).then(mat => {
                const embed4 = new Discord.MessageEmbed()
                .setTitle(mat.data[0].attributes.titles.en_jp)
                .setURL(`https://kitsu.io/${mat.data[0].id}`)
                .setThumbnail(mat.data[0].attributes.posterImage.original)
                .setDescription(mat.data[0].attributes.synopsis)
                .setColor("ORANGE")
                .addField("Tipo: ", mat.data[0].attributes.showType, true)
                .addField("Publicación: ", mat.data[0].attributes.startDate, true)
                .addField("Siguiente lanzamiento: ", mat.data[0].attributes.episodeLength ? mat.data[0].attributes.episodeLength: "N/A", true)
                .addField("Número de episodios: ", mat.data[0].attributes.episodeCount ? mat.data[0].attributes.episodeCount: "N/A", true)
                .addField("Género por edad: ", `${mat.data[0].attributes.ageRatingGuide}`, true)
                .addField("Ranking: ", mat.data[0].attributes.ratingRank, true)
                .addField("Puntuacion media: ", mat.data[0].attributes.averageRating, true)
                .setFooter("Desarrollado por: Hololive")
                message.channel.send(embed4)
                msg.delete()
                message.delete()
            })
        })

    }
}