DROP SCHEMA IF EXISTS civ_games;

CREATE SCHEMA civ_games;

USE civ_games;

CREATE TABLE publishers (
	publisher_id int not null auto_increment,
    publisher_name varchar(100) not null,
    CONSTRAINT PK_publisher_id primary key(publisher_id)
);

INSERT INTO publishers (publisher_id, publisher_name)
	VALUES (1, 'Bethesda'), (2, 'Activision Blizzard'), (3, 'Bungie'), (4, '343'), (5, 'Nintendo');

CREATE TABLE platforms (
	platform_id int not null auto_increment,
    platform_name varchar(100) not null,
    CONSTRAINT PK_platform_id primary key(platform_id)
);

INSERT INTO platforms (platform_id, platform_name)
	VALUES (1, 'Xbox'), (2, 'PlayStation'), (3, 'PC'), (4, 'Nintendo');

CREATE TABLE games (
	game_id int not null auto_increment,
	title varchar(100) not null,
    release_date date,
    publisher_id int not null,
    CONSTRAINT PK_game_id primary key(game_id),
    CONSTRAINT FK_publisher_id foreign key (publisher_id) references publishers (publisher_id)
);

INSERT INTO games (game_id, title, release_date, publisher_id)
	VALUES  (1, 'Halo Infinite', '2021-12-08', 4), 
			(2, 'Destiny 2', '2017-09-17', 3),
            (3, 'Fallout 4', '2015-11-10', 1),
            (4, 'Call of Duty Modern Warfare', '2019-10-25', 2);

CREATE TABLE platforms_games (
	platform_id int not null,
    game_id int not null,
    platforms_games_id int not null auto_increment,
    CONSTRAINT PK_platforms_games_id primary key(platforms_games_id),
    CONSTRAINT FK_platform_id foreign key (platform_id) references platforms (platform_id),
    CONSTRAINT FK_game_id foreign key (game_id) references games (game_id)
);

INSERT INTO platforms_games (platform_id, game_id)
	VALUES (1, 1), (2, 1), (2, 2), (3, 3), (2, 4);

-- SELECT * FROM publishers;
-- SELECT * FROM platforms;
-- SELECT * FROM games;
-- SELECT * FROM platforms_games;