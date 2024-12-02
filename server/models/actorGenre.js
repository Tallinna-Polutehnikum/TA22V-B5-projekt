import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class actorGenre extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('actorGenre', {
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
    genre_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'genre',
        key: 'id'
      }
    }
  }, {
    tableName: 'actor_genre',
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
        name: "actor_genre_actor_id_index",
        using: "BTREE",
        fields: [
          { name: "actor_id" },
        ]
      },
      {
        name: "actor_genre_genre_id_index",
        using: "BTREE",
        fields: [
          { name: "genre_id" },
        ]
      },
    ]
  });
  }
}
