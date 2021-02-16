const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "ma!"
const fs = require("fs");
const { isFunction } = require("util")

client.on("ready", () => {

    console.log("Loli Fubuki.") 
    client.user.setPresence({
        status: "online",
        activity: {
            name: "HOLOLIVE",
            type: "WATCHING"

        }
    })
})
client.comandos = new Discord.Collection()

let archivos = fs.readdirSync("./comandos").filter((f) => f.endsWith(".js"))



for(var archi of archivos) {
    let comando = require("./comandos/"+archi)
    client.comandos.set(comando.nombre, comando)
    console.log(archi+" fue cargado correctamente.")
}

client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(message.channel.type == "dm") return;
    
    
   
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    let cmd = client.comandos.get(command) || client.comandos.find((c) => c.alias.includes(command))
    if(cmd){
      return cmd.run(client, message, args)
    }  

    if (!message.guild) return;
    if (message.author.bot) return;
      
})










client.login(process.env.TOKEN)


