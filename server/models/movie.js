import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Movie extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
      allowNull: true,
      defaultValue: 0
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    year: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    languageId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'language',
        key: 'id'
      },
      field: 'language_id'
    },
    sublangId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'language',
        key: 'id'
      },
      field: 'sublang_id'
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
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
