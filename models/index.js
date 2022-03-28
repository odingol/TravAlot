const User = require('./users');
const attractions = require('./attractions');

User.hasMany(attractions, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

waterPark.belongsTo(User, {
  foreignKey: 'user_id'
});

resort.belongsTo(User, {
  foreignKey: 'user_id'
});

themePark.belongsTo(User, {
  foreignKey: 'user_id'
});

rollerCoaster.belongsTo(User, {
  foreignKey: 'user_id'
});

// I will need to double check to make sure this is formatted correctly. Going to push now and will talk with groupmates or tutor to confirm. //

module.exports = { User, attractions };