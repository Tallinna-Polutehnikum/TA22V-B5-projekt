import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Actor extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'last_name'
    }
  }, {
    sequelize,
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
