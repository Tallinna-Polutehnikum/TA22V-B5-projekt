import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class MoviePoster extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    movieId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'movie',
        key: 'id'
      },
      field: 'movie_id'
    },
    posterId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'poster',
        key: 'id'
      },
      field: 'poster_id'
    }
  }, {
    sequelize,
    tableName: 'movie_poster',
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
        name: "movie_poster_un",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "movie_id" },
          { name: "poster_id" },
        ]
      },
      {
        name: "poster_id",
        using: "BTREE",
        fields: [
          { name: "poster_id" },
        ]
      },
    ]
  });
  }
}
