const User = require('./user');
const Project = require('./Blog');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Blog.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  module.exports = { User, Project };