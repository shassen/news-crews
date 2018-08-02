// Require models for project
const user = require('../models/user');
const group = require('../models/group');
const comment = require('../models/comment');


const userSeedData = [
  {
    username: 'shawn',
    password: 'password',
    f_name: 'shawn',
    l_name: 'hassen',
    email: 'shassen89@gmail.com',
  },
  {
    username: 'test',
    password: 'test',
    f_name: 'test',
    l_name: 'tester',
    email: 'test@test.com',
  },
  {
    username: 'user1',
    password: 'user1',
    f_name: 'user1',
    l_name: 'useruser1',
    email: 'user1@test.com',
  },
];

const groupSeedData = [
  {
    group_name: 'test group',
    description: 'this is a group created for testing',
  },
];


async function seed() {
  // seed users
  const users = await Promise.all(userSeedData
    .map(({ username, password, f_name, l_name, email }) => 
      user.register(username, password, f_name, l_name, email)));
    // seed groups
  const groups = await Promise.all(groupSeedData.map(group.save));
}