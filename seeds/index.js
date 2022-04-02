const sequelize = require('../config/connection');
const seedWaterPark = require('./waterparkData');
const seedThemePark = require('./themeparkData');
const seedRollerCoaster = require('./rollercoasterData');
const seedResort = require('./resortData');



const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedWaterPark();

    await seedThemePark();

    await seedRollerCoaster();

    await seedResort();

    process.exit(0);
};

seedAll();