import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _actor from  "./actor.js";
import _actorGenre from  "./actorGenre.js";
import _actorMovie from  "./actorMovie.js";
import _address from  "./address.js";
import _addressType from  "./addressType.js";
import _city from  "./city.js";
import _genre from  "./genre.js";
import _language from  "./language.js";
import _movie from  "./movie.js";
import _movieGenre from  "./movieGenre.js";
import _permission from  "./permission.js";
import _permissionRole from  "./permissionRole.js";
import _rating from  "./rating.js";
import _role from  "./role.js";
import _session from  "./session.js";
import _ticket from  "./ticket.js";
import _user from  "./user.js";
import _userRole from  "./userRole.js";

export default function initModels(sequelize) {
  const actor = _actor.init(sequelize, DataTypes);
  const actorGenre = _actorGenre.init(sequelize, DataTypes);
  const actorMovie = _actorMovie.init(sequelize, DataTypes);
  const address = _address.init(sequelize, DataTypes);
  const addressType = _addressType.init(sequelize, DataTypes);
  const city = _city.init(sequelize, DataTypes);
  const genre = _genre.init(sequelize, DataTypes);
  const language = _language.init(sequelize, DataTypes);
  const movie = _movie.init(sequelize, DataTypes);
  const movieGenre = _movieGenre.init(sequelize, DataTypes);
  const permission = _permission.init(sequelize, DataTypes);
  const permissionRole = _permissionRole.init(sequelize, DataTypes);
  const rating = _rating.init(sequelize, DataTypes);
  const role = _role.init(sequelize, DataTypes);
  const session = _session.init(sequelize, DataTypes);
  const ticket = _ticket.init(sequelize, DataTypes);
  const user = _user.init(sequelize, DataTypes);
  const userRole = _userRole.init(sequelize, DataTypes);

  actorGenre.belongsTo(actor, { as: "actor", foreignKey: "actor_id"});
  actor.hasMany(actorGenre, { as: "actor_genres", foreignKey: "actor_id"});
  actorMovie.belongsTo(actor, { as: "actor", foreignKey: "actor_id"});
  actor.hasMany(actorMovie, { as: "actor_movies", foreignKey: "actor_id"});
  session.belongsTo(address, { as: "address", foreignKey: "address_id"});
  address.hasMany(session, { as: "sessions", foreignKey: "address_id"});
  address.belongsTo(addressType, { as: "type", foreignKey: "type_id"});
  addressType.hasMany(address, { as: "addresses", foreignKey: "type_id"});
  address.belongsTo(city, { as: "city", foreignKey: "city_id"});
  city.hasMany(address, { as: "addresses", foreignKey: "city_id"});
  actorGenre.belongsTo(genre, { as: "genre", foreignKey: "genre_id"});
  genre.hasMany(actorGenre, { as: "actor_genres", foreignKey: "genre_id"});
  movieGenre.belongsTo(genre, { as: "genre", foreignKey: "genre_id"});
  genre.hasMany(movieGenre, { as: "movie_genres", foreignKey: "genre_id"});
  movie.belongsTo(language, { as: "language", foreignKey: "language_id"});
  language.hasMany(movie, { as: "movies", foreignKey: "language_id"});
  movie.belongsTo(language, { as: "sublang", foreignKey: "sublang_id"});
  language.hasMany(movie, { as: "sublang_movies", foreignKey: "sublang_id"});
  actorMovie.belongsTo(movie, { as: "movie", foreignKey: "movie_id"});
  movie.hasMany(actorMovie, { as: "actor_movies", foreignKey: "movie_id"});
  movieGenre.belongsTo(movie, { as: "movie", foreignKey: "movie_id"});
  movie.hasMany(movieGenre, { as: "movie_genres", foreignKey: "movie_id"});
  rating.belongsTo(movie, { as: "movie", foreignKey: "movie_id"});
  movie.hasMany(rating, { as: "ratings", foreignKey: "movie_id"});
  session.belongsTo(movie, { as: "movie", foreignKey: "movie_id"});
  movie.hasMany(session, { as: "sessions", foreignKey: "movie_id"});
  permissionRole.belongsTo(permission, { as: "permission", foreignKey: "permission_id"});
  permission.hasMany(permissionRole, { as: "permission_roles", foreignKey: "permission_id"});
  permissionRole.belongsTo(role, { as: "role", foreignKey: "role_id"});
  role.hasMany(permissionRole, { as: "permission_roles", foreignKey: "role_id"});
  userRole.belongsTo(role, { as: "role", foreignKey: "role_id"});
  role.hasMany(userRole, { as: "user_roles", foreignKey: "role_id"});
  ticket.belongsTo(session, { as: "session", foreignKey: "session_id"});
  session.hasMany(ticket, { as: "tickets", foreignKey: "session_id"});
  userRole.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(userRole, { as: "user_roles", foreignKey: "user_id"});

  return {
    actor,
    actorGenre,
    actorMovie,
    address,
    addressType,
    city,
    genre,
    language,
    movie,
    movieGenre,
    permission,
    permissionRole,
    rating,
    role,
    session,
    ticket,
    user,
    userRole,
  };
}
