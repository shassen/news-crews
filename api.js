// Fetch req initially created to pull news articles for project.
// Considering time constraints, this function wasn't implemented.
// Thank you, @Drake Talley for supplying this in our fetch lab.

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
