const {REST,Routes}=require('discord.js');

const commands = [
    {
      name: 'create',
      description: 'Create a new url',
    },
  ];

  const rest = new REST({ version: '10' }).setToken('MTIxMDA2MzMyMTkzNjQyOTA5Ng.G3dW-W.l4NDYzC1UDjuA9jEajIfwybQ6VQA6AsvRztqFk');
(async ()=>{
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands('1210063321936429096'), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }

})();
  