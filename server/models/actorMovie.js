import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class actorMovie extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('actorMovie', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    actor_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'actor',
        key: 'id'
      }
    },
    movie_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'movie',
        key: 'id'
      }
    }
  }, {
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
