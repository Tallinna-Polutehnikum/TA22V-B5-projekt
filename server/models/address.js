import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Address extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    typeId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'address_type',
        key: 'id'
      },
      field: 'type_id'
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    district: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cityId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'city',
        key: 'id'
      },
      field: 'city_id'
    },
    postaleCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'postale_code'
    },
    phone: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    location: {
      type: DataTypes.GEOMETRY,
      allowNull: true
    }
  }, {
    sequelize,
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
          { name: "address" },
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
