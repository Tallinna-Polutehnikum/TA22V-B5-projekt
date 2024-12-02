import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class rating extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('rating', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    movie_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'movie',
        key: 'id'
      }
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'rating',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "unique_user_movie_rating",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "movie_id" },
        ]
      },
      {
        name: "rating_user_id_index",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "rating_movie_id_index",
        using: "BTREE",
        fields: [
          { name: "movie_id" },
        ]
      },
    ]
  });
  }
}
