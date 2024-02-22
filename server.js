const {Client,GatewayIntentBits} =require('discord.js')

const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.on('messageCreate',(message)=>{
    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const url=message.content.split('create')[1];
        return message.reply({
            content:"genrating Short ID for"+url
        })
    }
    message.reply({
        content:"Hii from Bot"
    });
})
client.on('interactionCreate',interaction=>{
    console.log(interaction)
    interaction.reply("Pong!!");
})

client.login('MTIxMDA2MzMyMTkzNjQyOTA5Ng.G3dW-W.l4NDYzC1UDjuA9jEajIfwybQ6VQA6AsvRztqFk');

