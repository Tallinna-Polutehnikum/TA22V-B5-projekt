CREATE TABLE `movie`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` TEXT NOT NULL,
    `rating` INT NULL,
    `description` LONGTEXT NOT NULL,
    `year` DATE NOT NULL,
    `language_id` BIGINT UNSIGNED NOT NULL, 
    `sublang_id` BIGINT UNSIGNED NOT NULL
);
ALTER TABLE
    `movie` ADD INDEX `movie_year_index`(`year`);
CREATE TABLE `user`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `email` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NULL,
    `password` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `user` ADD INDEX `user_email_index`(`email`);
CREATE TABLE `user_role`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `role_id` BIGINT UNSIGNED NOT NULL
);
ALTER TABLE
    `user_role` ADD INDEX `user_role_user_id_index`(`user_id`);
ALTER TABLE
    `user_role` ADD INDEX `user_role_role_id_index`(`role_id`);
CREATE TABLE `movie_genre`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `movie_id` BIGINT UNSIGNED NOT NULL,
    `genre_id` BIGINT UNSIGNED NOT NULL
);
ALTER TABLE
    `movie_genre` ADD INDEX `movie_genre_movie_id_index`(`movie_id`);
ALTER TABLE
    `movie_genre` ADD INDEX `movie_genre_genre_id_index`(`genre_id`);
CREATE TABLE `role`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);
CREATE TABLE `genre`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `genre` VARCHAR(255) NOT NULL
);
CREATE TABLE `actor_movie`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `actor_id` BIGINT UNSIGNED NOT NULL,
    `movie_id` BIGINT UNSIGNED NOT NULL
);
ALTER TABLE
    `actor_movie` ADD INDEX `actor_movie_actor_id_index`(`actor_id`);
ALTER TABLE
    `actor_movie` ADD INDEX `actor_movie_movie_id_index`(`movie_id`);
CREATE TABLE `actor_genre`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `actor_id` BIGINT UNSIGNED NOT NULL,
    `genre_id` BIGINT UNSIGNED NOT NULL
);
ALTER TABLE
    `actor_genre` ADD INDEX `actor_genre_actor_id_index`(`actor_id`);
ALTER TABLE
    `actor_genre` ADD INDEX `actor_genre_genre_id_index`(`genre_id`);
CREATE TABLE `ticket`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `session_id` BIGINT UNSIGNED NOT NULL,
    `price` BIGINT UNSIGNED NOT NULL
);
CREATE TABLE `permission_role`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `permission_id` BIGINT UNSIGNED NOT NULL,
    `role_id` BIGINT UNSIGNED NOT NULL
);
ALTER TABLE
    `permission_role` ADD INDEX `permission_role_permission_id_index`(`permission_id`);
ALTER TABLE
    `permission_role` ADD INDEX `permission_role_role_id_index`(`role_id`);
CREATE TABLE `permission`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` BIGINT NOT NULL
);
CREATE TABLE `language`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` TEXT NOT NULL
);
ALTER TABLE
    `language` ADD INDEX `language_name_index`(`name`(255));
CREATE TABLE `rating`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `movie_id` BIGINT UNSIGNED NOT NULL,
    `rate` INT NULL
);
ALTER TABLE
    `rating` ADD INDEX `rating_user_id_index`(`user_id`);
ALTER TABLE
    `rating` ADD INDEX `rating_movie_id_index`(`movie_id`);
CREATE TABLE `session`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `movie_id` BIGINT UNSIGNED NOT NULL,
    `address_id` BIGINT UNSIGNED NOT NULL,
    `date` DATETIME NOT NULL
);
ALTER TABLE
    `session` ADD INDEX `session_movie_id_index`(`movie_id`);
ALTER TABLE
    `session` ADD INDEX `session_address_id_index`(`address_id`);
CREATE TABLE `address`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `type_id` BIGINT UNSIGNED NOT NULL,
    `address` LONGTEXT NOT NULL,
    `address2` LONGTEXT NULL,
    `district` LONGTEXT NULL,
    `city_id` BIGINT UNSIGNED NOT NULL,
    `postale_code` varchar(10) NULL,
    `phone` BIGINT UNSIGNED NULL,
    `location` GEOMETRY NOT NULL
);
ALTER TABLE
    `address` ADD INDEX `address_type_index`(`type_id`);
ALTER TABLE
    `address` ADD INDEX `address_address_index`(`address`(255));
ALTER TABLE
    `address` ADD INDEX `address_city_id_index`(`city_id`);
ALTER TABLE
    `address` ADD INDEX `address_postale_code_index`(`postale_code`);
CREATE TABLE `address_type`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `type` TEXT(255) NOT NULL
);
create table `hall` (
	`id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `address_id`  BIGINT UNSIGNED NOT NULL,
    `title` TEXT
);
alter table
`hall` add constraint `hall_address_id_foreign` foreign key(`address_id`) references `address`(`id`);
create table `seat` (
	`id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `hall_id` BIGINT UNSIGNED NOT NULL,
    `type`  BIGINT UNSIGNED NOT NULL,
    `row` BIGINT UNSIGNED NOT NULL,
    `seat` BIGINT UNSIGNED NOT NULL
    );
create table `seat_type`(
	 `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
     `type` TEXT NOT NULL
);
alter table
`seat` add constraint `seat_type_id_foreign` foreign key(`type`) references `seat_type`(`id`);
alter table
`seat` add constraint `seat_hall_id_foreign` foreign key(`hall_id`) references `hall`(`id`);
CREATE TABLE `city` (
	`id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` TEXT(255) NOT NULL
);
CREATE TABLE `actor`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` LONGTEXT NOT NULL,
    `last_name` LONGTEXT NOT NULL
);
ALTER TABLE
    `actor` ADD INDEX `actor_first_name_index`(`first_name`(255));
ALTER TABLE
    `actor` ADD INDEX `actor_last_name_index`(`last_name`(255));
ALTER TABLE
    `session` ADD CONSTRAINT `session_movie_address_foreign` FOREIGN KEY(`movie_id`) REFERENCES `movie`(`id`);
ALTER TABLE
    `session` ADD CONSTRAINT `session_address_id_foreign` FOREIGN KEY(`address_id`) REFERENCES `address`(`id`);
ALTER TABLE
    `address` ADD CONSTRAINT `address_type_foreign` FOREIGN KEY(`type_id`) REFERENCES `address_type`(`id`);
ALTER TABLE
    `address` ADD CONSTRAINT `address_city_foreign` FOREIGN KEY(`city_id`) REFERENCES `city`(`id`);
ALTER TABLE
    `actor_movie` ADD CONSTRAINT `actor_movie_movie_id_foreign` FOREIGN KEY(`movie_id`) REFERENCES `movie`(`id`);
ALTER TABLE
    `user_role` ADD CONSTRAINT `user_role_role_id_foreign` FOREIGN KEY(`role_id`) REFERENCES `role`(`id`);
ALTER TABLE
    `movie` ADD CONSTRAINT `movie_language_id_foreign` FOREIGN KEY(`language_id`) REFERENCES `language`(`id`);
ALTER TABLE
    `movie_genre` ADD CONSTRAINT `movie_genre_genre_id_foreign` FOREIGN KEY(`genre_id`) REFERENCES `genre`(`id`);
ALTER TABLE
    `permission_role` ADD CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY(`role_id`) REFERENCES `role`(`id`);
ALTER TABLE
    `rating` ADD CONSTRAINT `unique_user_movie_rating` UNIQUE (`user_id`, `movie_id`);
ALTER TABLE
    `movie` ADD CONSTRAINT `movie_sublang_id_foreign` FOREIGN KEY(`sublang_id`) REFERENCES `language`(`id`);
ALTER TABLE
    `movie_genre` ADD CONSTRAINT `movie_genre_movie_id_foreign` FOREIGN KEY(`movie_id`) REFERENCES `movie`(`id`);
ALTER TABLE
    `actor_movie` ADD CONSTRAINT `actor_movie_actor_id_foreign` FOREIGN KEY(`actor_id`) REFERENCES `actor`(`id`);
ALTER TABLE
    `actor_genre` ADD CONSTRAINT `actor_genre_actor_id_foreign` FOREIGN KEY(`actor_id`) REFERENCES `actor`(`id`);
ALTER TABLE
    `actor_genre` ADD CONSTRAINT `actor_genre_genre_id_foreign` FOREIGN KEY(`genre_id`) REFERENCES `genre`(`id`);

ALTER TABLE
    `rating` ADD CONSTRAINT `rating_movie_id_foreign` FOREIGN KEY(`movie_id`) REFERENCES `movie`(`id`);
ALTER TABLE
    `rating` ADD CONSTRAINT `rating_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`id`);
ALTER TABLE
    `permission_role` ADD CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY(`permission_id`) REFERENCES `permission`(`id`);
ALTER TABLE
    `user_role` ADD CONSTRAINT `user_role_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`id`);
ALTER TABLE
    `ticket` ADD CONSTRAINT `ticket_session_id_foreign` FOREIGN KEY(`session_id`) REFERENCES `session`(`id`);