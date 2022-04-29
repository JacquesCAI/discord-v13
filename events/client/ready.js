module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`Ready!`)

    const devGuild = await client.guilds.cache.get('367971184954048523')
    devGuild.commands.set(client.commands.map(cmd => cmd))
  }
}
