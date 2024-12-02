import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class address extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('address', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'address_type',
        key: 'id'
      }
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    district: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'city',
        key: 'id'
      }
    },
    postale_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    phone: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    location: {
      type: DataTypes.GEOMETRY,
      allowNull: false
    }
  }, {
    tableName: 'address',
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
        name: "address_type_index",
        using: "BTREE",
        fields: [
          { name: "type_id" },
        ]
      },
      {
        name: "address_address_index",
        using: "BTREE",
        fields: [
          { name: "address", length: 255 },
        ]
      },
      {
        name: "address_city_id_index",
        using: "BTREE",
        fields: [
          { name: "city_id" },
        ]
      },
      {
        name: "address_postale_code_index",
        using: "BTREE",
        fields: [
          { name: "postale_code" },
        ]
      },
    ]
  });
  }
}
