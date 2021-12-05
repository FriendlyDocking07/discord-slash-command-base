const { prefix } = require('../configuration/config.ex.js').settings.prefix

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		
	const client = interaction.client;
		
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
        
        	if (!interaction.isCommand()) return;

	        const command = client.commands.get(interaction.commandName);

	        if (!command) return;

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                return interaction.reply({ content: `There was an error while executing the ${prefix}${interaction.commandName} command.`, ephemeral: true });
            }
	},
};
