require('./api')
const { Worker } = require ('bullmq');
const axios = require("axios");


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const headers = {
    "apikey": process.env.LICENSE,
    "token": process.env.TOKEN_SYSTEM
}

async function sendText (job) {
    try {
        const response = await axios.post('http://localhost:3001/whatsapp/send/text', job.data.data, {
            headers: headers
        })
        console.log('STATUS', response.data.status)
        if (response.data.status !== 200) {
            console.log('Error: ', response.data)
            throw "Error"
        }
    } catch (e) {
        throw e
    }
}

async function sendButtons (job) {
    try {
        const response = await axios.post('http://localhost:3001/whatsapp/send/buttons', job.data.data, {
            headers: headers
        })
        if (response.data.status !== 200) {
            console.log('Error: ', response.data)
            throw "Error"
        }
    } catch (e) {
        throw e
    }
}

console.log(`
BOT_NAME: ${process.env.BOT_NAME}
REDIS_HOST: ${process.env.REDIS_HOST}
REDIS_PORT: ${process.env.REDIS_PORT}
TOKEN_SYSTEM: ${process.env.TOKEN_SYSTEM}
SUPERCHAT_LICENSE: ${process.env.SUPERCHAT_LICENSE}
`)


const worker = new Worker(process.env.BOT_NAME, async job => {
    await sleep(job.data.delay)
    console.log('Processando job:', job.name)
    const methods = {
        'send_text': sendText,
        'send_buttons': sendButtons
    }

    await methods[job.name](job)

}, {
    connection: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
}
);

worker.on('completed', (job) => {
    console.log(`${job.id} has completed!`);
});

worker.on('failed', (job, err) => {
    console.log(`${job.id} has failed with ${err.message}`);
});
