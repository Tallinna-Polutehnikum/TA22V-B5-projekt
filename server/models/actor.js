import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class actor extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('actor', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'actor',
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
        name: "actor_first_name_index",
        using: "BTREE",
        fields: [
          { name: "first_name", length: 255 },
        ]
      },
      {
        name: "actor_last_name_index",
        using: "BTREE",
        fields: [
          { name: "last_name", length: 255 },
        ]
      },
    ]
  });
  }
}
