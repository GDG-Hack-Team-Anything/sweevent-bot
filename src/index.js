require('dotenv').config();

const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    IntentsBitField: [
        IntentsBitField.FLAGS.GUILDS,
        IntentsBitField.FLAGS.GUILD_MESSAGES,
        IntentsBitField.FLAGS.GUILDS_MEMBERS
    ]
});

client.login(process.env.TOKEN);