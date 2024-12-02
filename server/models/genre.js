import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class genre extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('genre', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    genre: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'genre',
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
    ]
  });
  }
}
