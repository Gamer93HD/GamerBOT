const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?";
var pre = "!!";

client.login("NjQ2MDEzMDQxNDY0NTczOTgy.XeUtvA.dKZW5VOHAqVzLmMk_iSj9sE7N3k");

client.on("guildMemberAdd", user =>{
    user.guild.channels.get("589739099154546690").send("Bienvenu(e) " + user +" sur le serveur")
});


client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "help"){
        message.channel.send("```Help : Prefix : ?```")
        message.delete()
    }
})
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === "bonjour"){
        message.channel.send("Bonjour " + message.author.username +" !")
    }
})
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix +"quiz"){
        message.channel.send("Bonjour au quiz de Gamer93! Si tu est prêt a faire la Quiz fait <goquiz")
        
    }
})

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix +"1A"){
        message.channel.send("Bravo ! ,")
    }
})
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix +"B"){
        message.channel.send("Dommage... Tu as faut , fait <1C ou <1A")

    }
})
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix +"C"){
        message.channel.send("Dommage... Tu as faut , Fait <1A ou <1B")
    }

})
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix +""){
        message.player.delete("crash :)")
    }
})
client.on("message", message =>{
  if(!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLocaleLowerCase() === pre + "clear")  {
      
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
      let count = args[1]
      if (!count) return message.channel.send("Veuillez indiquer un nombre de message a supprimer")
      if (isNaN(count) ) return message.channel.send("Veuillez indiquer un nombre valide")
      if (count < 1 || count >100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
      message.channel.bulkDelete(parseInt(count) + 1).catch(message => {
        message.channel.send("Erreur.")   
       })
    }

})
client.on("message", message =>{
if(message.content === prefix +"ping"){
message.channel.send("Calcul...").catch(message => {
 message.channel.send('Erreur.')   
}).then(message => {
message.edit('pong (' + Math.round(client.ping) +' ms)')
     
})
}

});
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === "tg"){
       message.delete();
       
    }

})
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === pre ){
      message.delete()
        message.channel.send("Fait ?help")
       
    }

})

