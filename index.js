const { Client, Events, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

client.on(Events.ClientReady, (client) => {
  console.log(`Bot iniciado como ${client.user.username}`);
});

client.on(Events.MessageCreate, (message) => {
  if (message.content === "ping") {
    message.reply("pong");
  }
});

client.login("TU TOKEN VA AQUÍ");