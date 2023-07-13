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
    }
  ];
  
  connection.once('open', async () => {
    await User.deleteMany({});
  
    const users = await User.insertMany(dummyUserData);
  
    console.log('Users seeded!');
  
    process.exit(0);
  });


  