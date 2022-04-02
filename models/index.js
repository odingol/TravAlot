const { User } = require('./users');
const {resort, rollerCoaster, waterPark, themePark} = require('./attractions');


User.hasMany(resort, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(waterPark, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(themePark, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(rollerCoaster, {
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


module.exports = { User, waterPark, resort, themePark, rollerCoaster };