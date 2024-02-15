const sequelize = require('../config/connection');
const { User, BlogPost,Comment } = require('../models');

const userData = require('./userData.json');
const blogpostData = require('./blogpostdata.json');
const commentData=require("./commentdata.json")

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const blogPost = await BlogPost.bulkCreate(blogpostData, {
    individualHooks: true,
    returning: true,
  });

  const comment = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  

  process.exit(0);
};

seedDatabase();
