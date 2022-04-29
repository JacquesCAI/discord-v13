module.exports = {
  name: "ping",
  aliases: ["pong"],
  description: "Ping!",
  run: (client, message, args) => {
    message.channel.send(`Pong! ${client.ws.ping}ms`)
  },
  runSlash: (client, interaction) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`)
  }
}
