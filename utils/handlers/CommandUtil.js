const { promisify } = require("util")
const { glob } = require("glob")
const pGlob = promisify(glob)

module.exports = async client => {
  (await pGlob(`${process.cwd()}/commands/*/*.js`)).map(async cmdFile => {
    const cmd = require(cmdFile)

    if (!cmd.name || !cmd.run) {
      return console.log(
        `[ERROR] Command ${cmd.name} is not valid.\n => ${cmdFile}`
      )
    }
    client.commands.set(cmd.name, cmd)
  })
}
