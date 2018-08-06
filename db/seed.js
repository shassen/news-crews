// Require models for project
const user = require('../models/user');
const group = require('../models/group');
const article = require('../models/article');
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
    name: 'test group',
    description: 'this is a group created for testing',
  },
  {
    name: 'shawns group',
    description: 'Tech news please',
  },
  {
    name: 'user1 group',
    description: 'User1\'s world news group',
  },
];


const commentSeedData = [
  {
    content: 'This article is fantastic!',
    url: 'https://www.usatoday.com/story/news/nation-now/2018/08/03/nasa-first-astronauts-spacex-boeing-ships/896846002/',
  },
];

// const userGroupSeedData = [
//   {
//     user_id: 1,
//     group_id: 1,
//   },
//   {
//     user_id: 2,
//     group_id: 2,
//   },
//   {
//     user_id: 3,
//     group_id: 3,
//   },
// ];


async function seed() {
  // seed users
  const users = await Promise.all(userSeedData
    .map(({ username, password }) => user.register(username, password)));
  console.log(users);
  // seed groups
  const groupQueries = groupSeedData.map((g, index) => (
    group.create({ ...g, created_by: users[index].username })));
  const groups = await Promise.all(groupQueries);
  console.log(groups);
  // seed comment
  const commentQueries = commentSeedData.map((c, index) => (
    comment.save({ author: 'shawn', ...c })));
  const comments = await Promise.all(commentQueries);
  console.log(comments);
  // // seed user_group table
  // const userGroups = await Promise.all(userGroupSeedData.map(el => userGroups.save(el)));
  // console.log(userGroups);
}
seed();

// seed groups
// const groups = await Promise.all(groupSeedData.map(group.save));

// const articleSeedData = [
//   {
//     source: 'USA Today',
//     url: 'https://www.usatoday.com/story/news/nation-now/2018/08/03/nasa-first-astronauts-spacex-boeing-ships/896846002/',
//     urlimg: 'https://www.gannett-cdn.com/-mm-/84fa046072fc684226a657961ca7b138e72e3a87/c=0-53-1041-641/local/-/media/2018/08/03/Brevard/Brevard/636688945380427913-nasa-ccp-group-photo.jpg?width=3200&height=1680&fit=crop'
//   },
// ];