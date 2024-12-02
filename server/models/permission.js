import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class permission extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('permission', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'permission',
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
