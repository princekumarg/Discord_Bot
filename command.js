const {REST,Routes}=require('discord.js');

const commands = [
    {
      name: 'create',
      description: 'Create a new url',
    },
  ];

  const rest = new REST({ version: '10' }).setToken('YOUR_TOKEN');
(async ()=>{
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands('YOUR_CLIENT_ID'), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }

})();
  
