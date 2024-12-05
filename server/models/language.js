import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Language extends Model {
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
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'language',
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
        name: "language_name_index",
        using: "BTREE",
        fields: [
          { name: "name", length: 255 },
        ]
      },
    ]
  });
  }
}
