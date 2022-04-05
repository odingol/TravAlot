const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class SavedAttractions extends Model {}

SavedAttractions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id"
      },
    },
    attraction_id: {
      type: DataTypes.INTEGER,
    //   references: {
    //     model: "",
    //     key: "id"
    //   },
    },
    attraction_type: {
        type: DataTypes.STRING
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;