const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {

}

Review.init(
  {
    id:{
      type: DataTypes.INTERGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataType.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Date.now,

    }

  }, {
    sequelize,
    timestamps: false,
    underscore: true,
    modelName: 'review'
  }
);
modeule.export = Review;
