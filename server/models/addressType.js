import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class AddressType extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "unique_type"
    }
  }, {
    sequelize,
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
      {
        name: "unique_type",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "type", length: 255 },
        ]
      },
    ]
  });
  }
}
