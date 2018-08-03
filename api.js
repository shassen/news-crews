const fetch = require('node-fetch');
const axios = require('axios');
const apiKey = process.env.NEWS_API_KEY;

function test() {
  return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=eca1e2899a2b41f48bee1f59b9c33aa5')
    .then((resp) => {
      if (!resp.ok) {
        throw Error(resp.statusText);
      }
      return resp.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e.message);
    });
}

test();
