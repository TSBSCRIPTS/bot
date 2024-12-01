const { Client, GatewayIntentBits } = require('discord.js');

// Create a new Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Bot token from Railway environment variables
const TOKEN = process.env.OTQ5NDY1OTgyMDQ3NDk0MTQ1.GJWwhJ.p5yXDVdI-Un7Ppjv3prJEH_E5Zhz2l7xmDDliA;

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
client.login(TOKEN);
