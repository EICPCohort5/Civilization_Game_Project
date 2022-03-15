DROP SCHEMA IF EXISTS civ_games;

CREATE SCHEMA civ_games;

USE civ_games;

CREATE TABLE publishers (
	publisher_id int not null auto_increment,
    publisher_name varchar(100),
    CONSTRAINT PK_publisher_id primary key(publisher_id)
);

INSERT INTO publishers (publisher_id, publisher_name)
	VALUES (1, 'Bethesda'), (2, 'Activision Blizzard'), (3, 'Bungie'), (4, '343');

CREATE TABLE platforms (
	platform_id int not null auto_increment,
    platform_name varchar(100),
    CONSTRAINT PK_platform_id primary key(platform_id)
);

INSERT INTO platforms (platform_id, platform_name)
	VALUES (1, 'Xbox'), (2, 'PlayStation'), (3, 'PC');

CREATE TABLE games (
	game_id int not null auto_increment,
	title varchar(100) not null,
    release_date date,
    publishers_publisher_id int,
    platforms_platform_id int,
    CONSTRAINT PK_game_id primary key(game_id),
    CONSTRAINT FK_publishers_publisher_id foreign key (publishers_publisher_id) references publishers (publisher_id),
    CONSTRAINT FK_platforms_platform_id foreign key (platforms_platform_id) references platforms (platform_id)
);

INSERT INTO games (game_id, title, release_date, publishers_publisher_id, platforms_platform_id)
	VALUES  (1, 'Halo Infinite', '2021-12-08', 4, 1), 
			(2, 'Destiny 2', '2017-09-17', 3, 1),
            (3, 'Fallout 4', '2015-11-10', 1, 3),
            (4, 'Call of Duty Modern Warfare', '2019-10-25', 2, 2)

-- SELECT * FROM publishers;
-- SELECT * FROM platforms;
-- SELECT * FROM games;