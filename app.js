
require('dotenv').config();

const mqtt = require('mqtt');

const host = process.env.MQTT_HOST;
const port = process.env.MQTT_PORT;
const username = process.env.MQTT_USERNAME;
const password = process.env.MQTT_PASSWORD;
const topic = process.env.MQTT_TOPIC;

if (!host || !username) {
    console.error("Error: File .env belum disetting dengan benar!");
    process.exit(1);
}

const connectUrl = `mqtts://${host}:${port}`;

const options = {
    clientId: 'nodejs_env_' + Math.random().toString(16).substr(2, 8),
    username: username,
    password: password,
    clean: true,
    connectTimeout: 4000,
    reconnectPeriod: 1000,
};

console.log(`Menghubungkan ke ${connectUrl}...`);
const client = mqtt.connect(connectUrl, options);

client.on('connect', () => {
    setInterval(() => {
        publishRandomData();
    }, 100000);
});

client.on('error', (error) => {
    console.error('Koneksi Gagal:', error);
});

function publishRandomData() {
    const randomValue = Math.floor(Math.random() * 100) + 1;

    const dataPayload = {
        message: "hello",
        data: randomValue
    };

    const payloadString = JSON.stringify(dataPayload);

    client.publish(topic, payloadString, { qos: 0, retain: false }, (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log(topic + ' : ' + payloadString);
        }
    });
}