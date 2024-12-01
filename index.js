const { Client, GatewayIntentBits } = require('discord.js');

// Create a new Discord client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Bot token from Railway environment variables
const TOKEN = process.env.DISCORD_TOKEN; // Correct reference to environment variable

if (!TOKEN) {
  console.error("Error: DISCORD_TOKEN is not set!");
  process.exit(1);  // Exit if the token is not found
}

// Bot is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Respond to messages
client.on('messageCreate', (message) => {
    if (message.author.bot) return; // Ignore other bots

    if (message.content === '!ping') {
        message.reply('Pong!');
    }
});

// Log in the bot
client.login(TOKEN).catch(err => {
    console.error('Error logging in: ', err);
});
