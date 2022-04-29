module.exports = {
  name: "messageCreate",
  once: false,
  execute: async (client, message) => {
    if (message.author.bot) return

    if (message.content.startsWith(process.env.PREFIX)) {
      const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g)
      const commandName = args.shift().toLowerCase()
      if(commandName.length === 0) return
      
      try {
        await client.commands.get(commandName).run(client, message, args)
      } catch (err) {
        console.error(err)
        message.channel.send(`Error: ${err.message}`)
      }
    }
  }
}