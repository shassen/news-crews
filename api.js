const fetch = require('node-fetch');
require('dotenv').config();
const apiKey = process.env.NEWS_API_KEY;

function test() {
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e.message);
    });
}
test();
