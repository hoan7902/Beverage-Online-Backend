const redis = require('redis');
const client = redis.createClient({
  url: 'redis://:rwTZV4LOQ0M5j6SYapy2y0sMakgy82IC@redis-16993.c295.ap-southeast-1-1.ec2.cloud.redislabs.com:16993',
});
client.ping(function (err, result) {
  console.log(result);
});

client.on('connect', () => {
  console.log('Redis client connected');
});

client.on('error', (error) => {
  console.error(error);
});
module.exports = client;
