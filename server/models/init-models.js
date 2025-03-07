import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Actor from  "./actor.js";
import _ActorGenre from  "./actorGenre.js";
import _ActorMovie from  "./actorMovie.js";
import _Address from  "./address.js";
import _AddressType from  "./addressType.js";
import _City from  "./city.js";
import _Genre from  "./genre.js";
import _Hall from  "./hall.js";
import _Language from  "./language.js";
import _Movie from  "./movie.js";
import _MovieGenre from  "./movieGenre.js";
import _MoviePoster from  "./moviePoster.js";
import _Permission from  "./permission.js";
import _PermissionRole from  "./permissionRole.js";
import _Poster from  "./poster.js";
import _PosterType from  "./posterType.js";
import _Rating from  "./rating.js";
import _Role from  "./role.js";
import _Seat from  "./seat.js";
import _SeatType from  "./seatType.js";
import _Session from  "./session.js";
import _Ticket from  "./ticket.js";
import _User from  "./user.js";
import _UserRole from  "./userRole.js";

export default function initModels(sequelize) {
  const Actor = _Actor.init(sequelize, DataTypes);
  const ActorGenre = _ActorGenre.init(sequelize, DataTypes);
  const ActorMovie = _ActorMovie.init(sequelize, DataTypes);
  const Address = _Address.init(sequelize, DataTypes);
  const AddressType = _AddressType.init(sequelize, DataTypes);
  const City = _City.init(sequelize, DataTypes);
  const Genre = _Genre.init(sequelize, DataTypes);
  const Hall = _Hall.init(sequelize, DataTypes);
  const Language = _Language.init(sequelize, DataTypes);
  const Movie = _Movie.init(sequelize, DataTypes);
  const MovieGenre = _MovieGenre.init(sequelize, DataTypes);
  const MoviePoster = _MoviePoster.init(sequelize, DataTypes);
  const Permission = _Permission.init(sequelize, DataTypes);
  const PermissionRole = _PermissionRole.init(sequelize, DataTypes);
  const Poster = _Poster.init(sequelize, DataTypes);
  const PosterType = _PosterType.init(sequelize, DataTypes);
  const Rating = _Rating.init(sequelize, DataTypes);
  const Role = _Role.init(sequelize, DataTypes);
  const Seat = _Seat.init(sequelize, DataTypes);
  const SeatType = _SeatType.init(sequelize, DataTypes);
  const Session = _Session.init(sequelize, DataTypes);
  const Ticket = _Ticket.init(sequelize, DataTypes);
  const User = _User.init(sequelize, DataTypes);
  const UserRole = _UserRole.init(sequelize, DataTypes);

  ActorGenre.belongsTo(Actor, { as: "actor", foreignKey: "actorId"});
  Actor.hasMany(ActorGenre, { as: "actorGenres", foreignKey: "actorId"});
  ActorMovie.belongsTo(Actor, { as: "actor", foreignKey: "actorId"});
  Actor.hasMany(ActorMovie, { as: "actorMovies", foreignKey: "actorId"});
  Hall.belongsTo(Address, { as: "address", foreignKey: "addressId"});
  Address.hasMany(Hall, { as: "halls", foreignKey: "addressId"});
  Session.belongsTo(Address, { as: "address", foreignKey: "addressId"});
  Address.hasMany(Session, { as: "sessions", foreignKey: "addressId"});
  Address.belongsTo(AddressType, { as: "type", foreignKey: "typeId"});
  AddressType.hasMany(Address, { as: "addresses", foreignKey: "typeId"});
  Address.belongsTo(City, { as: "city", foreignKey: "cityId"});
  City.hasMany(Address, { as: "addresses", foreignKey: "cityId"});
  ActorGenre.belongsTo(Genre, { as: "genre", foreignKey: "genreId"});
  Genre.hasMany(ActorGenre, { as: "actorGenres", foreignKey: "genreId"});
  MovieGenre.belongsTo(Genre, { as: "genre", foreignKey: "genreId"});
  Genre.hasMany(MovieGenre, { as: "movieGenres", foreignKey: "genreId"});
  Seat.belongsTo(Hall, { as: "hall", foreignKey: "hallId"});
  Hall.hasMany(Seat, { as: "seats", foreignKey: "hallId"});
  Movie.belongsTo(Language, { as: "language", foreignKey: "languageId"});
  Language.hasMany(Movie, { as: "movies", foreignKey: "languageId"});
  Movie.belongsTo(Language, { as: "sublang", foreignKey: "sublangId"});
  Language.hasMany(Movie, { as: "sublangMovies", foreignKey: "sublangId"});
  ActorMovie.belongsTo(Movie, { as: "movie", foreignKey: "movieId"});
  Movie.hasMany(ActorMovie, { as: "actorMovies", foreignKey: "movieId"});
  MovieGenre.belongsTo(Movie, { as: "movie", foreignKey: "movieId"});
  Movie.hasMany(MovieGenre, { as: "movieGenres", foreignKey: "movieId"});
  MoviePoster.belongsTo(Movie, { as: "movie", foreignKey: "movieId"});
  Movie.hasMany(MoviePoster, { as: "moviePosters", foreignKey: "movieId"});
  Rating.belongsTo(Movie, { as: "movie", foreignKey: "movieId"});
  Movie.hasMany(Rating, { as: "ratings", foreignKey: "movieId"});
  Session.belongsTo(Movie, { as: "movie", foreignKey: "movieId"});
  Movie.hasMany(Session, { as: "sessions", foreignKey: "movieId"});
  PermissionRole.belongsTo(Permission, { as: "permission", foreignKey: "permissionId"});
  Permission.hasMany(PermissionRole, { as: "permissionRoles", foreignKey: "permissionId"});
  MoviePoster.belongsTo(Poster, { as: "poster", foreignKey: "posterId"});
  Poster.hasMany(MoviePoster, { as: "moviePosters", foreignKey: "posterId"});
  Poster.belongsTo(PosterType, { as: "typePosterType", foreignKey: "type"});
  PosterType.hasMany(Poster, { as: "posters", foreignKey: "type"});
  PermissionRole.belongsTo(Role, { as: "role", foreignKey: "roleId"});
  Role.hasMany(PermissionRole, { as: "permissionRoles", foreignKey: "roleId"});
  UserRole.belongsTo(Role, { as: "role", foreignKey: "roleId"});
  Role.hasMany(UserRole, { as: "userRoles", foreignKey: "roleId"});
  Seat.belongsTo(SeatType, { as: "typeSeatType", foreignKey: "type"});
  SeatType.hasMany(Seat, { as: "seats", foreignKey: "type"});
  Ticket.belongsTo(Session, { as: "session", foreignKey: "sessionId"});
  Session.hasMany(Ticket, { as: "tickets", foreignKey: "sessionId"});
  Rating.belongsTo(User, { as: "user", foreignKey: "userId"});
  User.hasMany(Rating, { as: "ratings", foreignKey: "userId"});
  UserRole.belongsTo(User, { as: "user", foreignKey: "userId"});
  User.hasMany(UserRole, { as: "userRoles", foreignKey: "userId"});

  return {
    Actor,
    ActorGenre,
    ActorMovie,
    Address,
    AddressType,
    City,
    Genre,
    Hall,
    Language,
    Movie,
    MovieGenre,
    MoviePoster,
    Permission,
    PermissionRole,
    Poster,
    PosterType,
    Rating,
    Role,
    Seat,
    SeatType,
    Session,
    Ticket,
    User,
    UserRole,
  };
}
