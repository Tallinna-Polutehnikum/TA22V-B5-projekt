import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class City extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "unique_name"
    }
  }, {
    sequelize,
    tableName: 'city',
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
        name: "unique_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name", length: 255 },
        ]
      },
    ]
  });
  }
}
