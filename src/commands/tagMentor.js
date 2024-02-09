require('dotenv').config();
const config = require('../config');

module.exports = {
  name: 'tagmentor', 
  description: 'Tag a specific mentor in a predefined message.', 
  execute(message, args) {
     
      const mentorUsername = args[0];

      const mentorUser = message.guild.members.cache.find(member => member.user.username === mentorUsername);
      if (!mentorUser) {
          return message.reply(`Mentor ${mentorUsername} not found.`);
      }

      const mentorChannelId = config.predefinedMentorChannelId;

      const mentorChannel = message.guild.channels.cache.get(mentorChannelId);
      if (!mentorChannel) {
          return message.reply(`Mentor channel with ID ${mentorChannelId} not found.`);
      }
      
      mentorChannel.send(`${mentorUser}, team ${message.author.username} called you.`);
  },
};
