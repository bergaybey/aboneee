const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = (client) => {

    var oynuyorkısımları = [
    "Youtube Murat Eren"
    ]
    
    
    setInterval(function() {
    
           client.user.setActivity(oynuyorkısımları, { type: 'WATCHING' });
            })
                }
    
        
    