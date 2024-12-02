import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class addressType extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('addressType', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'address_type',
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
