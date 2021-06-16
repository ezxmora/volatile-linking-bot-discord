const config = require('dotenv').config()

if (config.error) {
    throw config.error;
}

const Discord = require('discord.js');
const bot = new Discord.Client({
    disableMentions: 'everyone',
    messageCacheMaxSize: 500,
    messageCacheLifetime: 120,
    messageSweepInterval: 60,
})

const init = async () => {
    bot.on('ready', async () => {
        const oldChannel = bot.channels.cache.find(channel => channel.name === process.env.CHANNEL_NAME);
        await oldChannel.clone();
        await oldChannel.delete('Purging channels');
    });

    bot.login(process.env.DISCORD_TOKEN);
}

init();