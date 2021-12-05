const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

// In this command, we'll be showing an example of how you can send an embed inside an interaction message. This method has changed since v12.

/* We'll be importing "discord.js" so we can build the embeds. 

You can find the documentation for Embeds here: https://discord.js.org/#/docs/main/stable/class/MessageEmbed

ONLY 1 TEXT FIELD IS REQUIRED WITH EMBEDS. - FOOTER, DESCRIPTION, AUTHOR or TITLE

*/

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
        .setDescription('You can get help with commands here.'),
	async execute(interaction) {

		let embed = new MessageEmbed()
		.setColor("BLURPLE") // You can find some colors here: https://discord.js.org/#/docs/main/stable/typedef/ColorResolvable or you can use a Color Hex (#FFFFF)
		.setTitle("This is the embed title.")
		.setDescription("This is the embed description....") // This sets the description of the embed.

		return interaction.reply({embed: [embed], ephemeral: true });
		// Ephemeral determines if the interaction reply should be seen by everybody or just the command executor.
	},
};

