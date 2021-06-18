"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      song.belongsTo(models.playlist);
      // define association here
    }
  }
  song.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      artist: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: true },
      uri: { type: DataTypes.STRING, allowNull: false },
      origin: { type: DataTypes.STRING, allowNull: true },
    },
    {
      sequelize,
      modelName: "song",
    }
  );
  return song;
};
