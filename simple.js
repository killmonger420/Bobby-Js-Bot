const axios = require('axios');
const cheerio = require('cheerio');

const urls = [
  'https://www.google.com',
  'https://www.facebook.com',
  'https://www.amazon.com',
  'https://www.youtube.com',
  'https://www.twitter.com'
];

async function countImages(url) {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const numImages = $('img').length;
  console.log(`${url} has ${numImages} images.`);
}

async function main() {
  for (const url of urls) {
    await countImages(url);
  }
}

main();
