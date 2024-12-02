import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class movieGenre extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('movieGenre', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    movie_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'movie',
        key: 'id'
      }
    },
    genre_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'genre',
        key: 'id'
      }
    }
  }, {
    tableName: 'movie_genre',
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
        name: "movie_genre_movie_id_index",
        using: "BTREE",
        fields: [
          { name: "movie_id" },
        ]
      },
      {
        name: "movie_genre_genre_id_index",
        using: "BTREE",
        fields: [
          { name: "genre_id" },
        ]
      },
    ]
  });
  }
}
