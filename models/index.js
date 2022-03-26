const User = require('./users');
const waterPark = require('./waterParks');
const resort = require('./resorts');
const themePark = require('./themeParks');
const rollerCoaster = require('./rollerCoasters');

User.hasMany(waterPark, {
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

// I think I will need to merge all of the model js sheets for User to only need one hasMany value //

module.exports = { User, waterPark, resort, themePark, rollerCoaster };