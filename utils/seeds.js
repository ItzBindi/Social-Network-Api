const { User } = require('../models');
const connection = require('../config/connection');

const dummyUserData = [
  {
    username: "johnDoe",
    email: "johndoe@example.com",
    thoughts: [],
    friends: []
  },
  {
    username: "janeSmith",
    email: "janesmith@example.com",
    thoughts: [],
    friends: []
  },
  {
    username: "bobJohnson",
    email: "bobjohnson@example.com",
    thoughts: [],
    friends: []
  },
  {
    username: "emmaWilliams",
    email: "emmawilliams@example.com",
    thoughts: [],
    friends: []
  },
  {
    username: "alexWilson",
    email: "alexwilson@example.com",
    thoughts: [],
    friends: []
  },
  {
    username: "sarahBrown",
    email: "sarahbrown@example.com",
    thoughts: [],
    friends: []
  },
  {
    username: "michaelDavis",
    email: "michaeldavis@example.com",
    thoughts: [],
    friends: []
  },
  {
    username: "oliviaMiller",
    email: "oliviamiller@example.com",
    thoughts: [],
    friends: []
  },
  {
    username: "jacobAnderson",
    email: "jacobanderson@example.com",
    thoughts: [],
    friends: []
  },
  {
    username: "emilyTaylor",
    email: "emilytaylor@example.com",
    thoughts: [],
    friends: []
  }
];

connection.once('open', async () => {
  await User.deleteMany({});

  const users = await User.insertMany(dummyUserData);

  console.log('Users seeded!');

  process.exit(0);
});
