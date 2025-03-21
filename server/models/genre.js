import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Genre extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    genre: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "genre"
    }
  }, {
    sequelize,
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
      {
        name: "genre",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "genre" },
        ]
      },
    ]
  });
  }
}
