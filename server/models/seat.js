import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Seat extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    hallId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'hall',
        key: 'id'
      },
      field: 'hall_id'
    },
    type: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'seat_type',
        key: 'id'
      }
    },
    row: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    seat: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'seat',
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
        name: "seat_type_id_foreign",
        using: "BTREE",
        fields: [
          { name: "type" },
        ]
      },
      {
        name: "seat_hall_id_foreign",
        using: "BTREE",
        fields: [
          { name: "hall_id" },
        ]
      },
    ]
  });
  }
}
