require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');


const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

client.login(process.env.TOKEN);

//tagMentor
client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);

    try {
        const guild = await client.guilds.fetch(process.env.GUILD_ID);

        const channel = await guild.channels.fetch(process.env.MENTOR_CLIENT_ID);

        await channel.send(`${mentorUser}, team ${team} called you.`);
        console.log("Message sent successfully.");
    } catch (error) {
        console.error("Error sending message:", error);
    }

    client.destroy();
});


//reportProblem
client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);

    try {
        const guild = await client.guilds.fetch(process.env.GUILD_ID);

        const channel = await guild.channels.fetch(process.env.HR_CLIENT_ID);

        await channel.send(`${team}: ${problem}`);
        console.log("Message sent successfully.");
    } catch (error) {
        console.error("Error sending message:", error);
    }

    client.destroy();
});