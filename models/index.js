const User = require('./User');
const BlogPost = require('./Blogpost');
const Comment=require("./Comment");
// Creates a relationship between User and BlogPost model, with the User having a "has many" relationship with BlogPost model.
User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Creates a relationship between User and BlogPost model, with a "belongs to" relationship of the BlogPost to the User.
BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPost.hasMany(Comment, {
  foreignKey: 'blogpost_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(BlogPost, {
  foreignKey: 'blogpost_id'
});


module.exports = { User, BlogPost,Comment };
