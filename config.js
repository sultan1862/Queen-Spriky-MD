const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '6upwDJCa#FTv9qEp2RUAni9gej7dtred0vCq9cH8DnccI7ONaD2I', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'jatoi',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '923235306919',    // Enter Your Owner Number
};
