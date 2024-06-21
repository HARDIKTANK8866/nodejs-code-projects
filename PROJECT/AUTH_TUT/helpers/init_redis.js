const redis = require('redis');

// Create a Redis client
const client = redis.createClient({
  port: 6379, // Redis port
  host: '127.0.0.1', // Redis host
});

// Event listener for successful connection
client.on('connect', () => {
  console.log('Client connected to redis...');
});

// Event listener when the client is ready to use
client.on('ready', () => {
  console.log('Client connected to redis and ready to use...');
});

// Event listener for errors
client.on('error', (err) => {
  console.log(err.message);
});

// Event listener for disconnection
client.on('end', () => {
  console.log('Client disconnected from redis');
})

// Gracefully handle process termination
process.on('SIGINT', () => {
  client.quit();
});

module.exports = client;
