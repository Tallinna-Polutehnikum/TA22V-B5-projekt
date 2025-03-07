import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Poster extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'poster_type',
        key: 'id'
      }
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "url"
    }
  }, {
    sequelize,
    tableName: 'poster',
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
        name: "url",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "url" },
        ]
      },
      {
        name: "type",
        using: "BTREE",
        fields: [
          { name: "type" },
        ]
      },
    ]
  });
  }
}
