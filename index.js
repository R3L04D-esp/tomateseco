const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))

///////////////////////////START BOT CODE/////////////////////////////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./package.json')
const privateMessage = require('./private-message.js')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
  privateMessage(client, 'ping', 'Pong!')
});

client.on('message', msg => {
  if (msg.content === 't!help') {
    msg.reply('Hola, soy el bot <@771126105100910602>, estoy aquí para ofrecerte ayuda de todo tipo, te recomiendo el canal <#771285289179152384> para información sobre mi utilidad, y el canal <#756997888214827129> para abrir un ticket en el que los <@&771145930467573802> puedan serte de ayuda :p');
  }
});


client.login('TOKEN');
