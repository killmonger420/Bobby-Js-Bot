const axios = require('axios');
const cheerio = require('cheerio');

const urls = [
  'https://www.google.com',
  'https://www.facebook.com',
  'https://www.amazon.com',
  'https://www.youtube.com',
  'https://www.twitter.com'
];

const awskey = "AKIAVAM5ZSDYPB3ZJ5J2";
const awssecret = "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";

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
