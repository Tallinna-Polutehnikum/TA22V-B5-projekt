import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class movie extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('movie', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    year: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    language_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'language',
        key: 'id'
      }
    },
    sublang_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'language',
        key: 'id'
      }
    }
  }, {
    tableName: 'movie',
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
        name: "movie_year_index",
        using: "BTREE",
        fields: [
          { name: "year" },
        ]
      },
      {
        name: "movie_language_id_foreign",
        using: "BTREE",
        fields: [
          { name: "language_id" },
        ]
      },
      {
        name: "movie_sublang_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sublang_id" },
        ]
      },
    ]
  });
  }
}
