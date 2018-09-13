const user    = require('../models/user');
const group   = require('../models/group');
const comment = require('../models/comment');

const userSeedData = [
  {
    username: 'shawn',
    password: 'password',
  },
  {
    username: 'test',
    password: 'test',
  },
  {
    username: 'user1',
    password: 'user1',
  },
];

const groupSeedData = [
  {
    name:        'test group',
    description: 'this is a group created for testing',
  },
  {
    name:        'shawns group',
    description: 'Tech news please',
  },
  {
    name:        'user1 group',
    description: 'User1\'s world news group',
  },
];


const commentSeedData = [
  {
    content: 'This article is fantastic!',
    url:     'https://www.usatoday.com/story/news/nation-now/2018/08/03/nasa-first-astronauts-spacex-boeing-ships/896846002/',
  },
];

// Initial seed for db. I referenced John Master's seed function from Quote-sta-gram to
// successfully seed the db. Thanks John!
async function seed() {
  const users = await Promise.all(userSeedData
    .map(({ username, password }) => user.register(username, password)));
  const groupQueries = groupSeedData.map((g, index) => (
    group.create({ ...g, created_by: users[index].username })));
  const groups = await Promise.all(groupQueries);
  const commentQueries = commentSeedData.map((c, index) => (
    comment.save({ author: 'shawn', ...c, group_id: 1 })));
  const comments = await Promise.all(commentQueries);
}
seed();
