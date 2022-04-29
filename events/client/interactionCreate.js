module.exports = {
  name: "interactionCreate",
  once: false,
  async execute(client, interaction) {
    if (interaction.isCommand()) {
      const command = client.commands.get(interaction.commandName)
      if (!command) return interaction.reply("Command not found.")
      command.runSlash(client, interaction)
    }
  }
}
