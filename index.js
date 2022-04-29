const { Client, Collection } = require("discord.js")
const dotenv = require("dotenv")
dotenv.config()
const client = new Client({ intents: 513 })
client.commands = new Collection()

const handlers = ["CommandUtil", "EventUtil"]
handlers.forEach(handler => {
  require(`./utils/handlers/${handler}`)(client)
})

process.on("exit", code => {
  console.log(`[EXIT] Process is exiting with code ${code}`)
})
process.on("uncaughtException", (err, origin) => {
  console.log(`[ERROR] Uncaught exception: ${err}, origin : ${origin}`)
})
process.on("unhandledRejection", (reason, promise) => {
  console.log(`[ERROR] Unhandled rejection: ${reason}, promise : ${promise}`)
})
process.on("warning", warning => {
  console.log(`[WARNING] ${warning}`)
})

client.login(process.env.TOKEN)
