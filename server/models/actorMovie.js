import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ActorMovie extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    actorId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'actor',
        key: 'id'
      },
      field: 'actor_id'
    },
    movieId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'movie',
        key: 'id'
      },
      field: 'movie_id'
    }
  }, {
    sequelize,
    tableName: 'actor_movie',
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
        name: "actor_movie_actor_id_index",
        using: "BTREE",
        fields: [
          { name: "actor_id" },
        ]
      },
      {
        name: "actor_movie_movie_id_index",
        using: "BTREE",
        fields: [
          { name: "movie_id" },
        ]
      },
    ]
  });
  }
}
