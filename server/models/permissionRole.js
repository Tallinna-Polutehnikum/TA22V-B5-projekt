import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class PermissionRole extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    permissionId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'permission',
        key: 'id'
      },
      field: 'permission_id'
    },
    roleId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'role',
        key: 'id'
      },
      field: 'role_id'
    }
  }, {
    sequelize,
    tableName: 'permission_role',
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
        name: "permission_role_permission_id_index",
        using: "BTREE",
        fields: [
          { name: "permission_id" },
        ]
      },
      {
        name: "permission_role_role_id_index",
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
  }
}
