DROP SCHEMA IF EXISTS civilisation_games_proj;
CREATE SCHEMA civilisation_games_proj;
use civilisation_games_proj;


CREATE TABLE publisher(
    publisher_id INT AUTO_INCREMENT PRIMARY KEY,
    name_pub VARCHAR(255)
    
);

CREATE TABLE platforms(
    platform_id INT AUTO_INCREMENT PRIMARY KEY,
    name_plat VARCHAR(255)
    
);
CREATE table games (
    games_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    publisher_id int,
    CONSTRAINT FK_publisher FOREIGN KEY(publisher_id) references publisher(publisher_id),
    year_pub DATE,
    platform_id int,
    CONSTRAINT FK_platform FOREIGN KEY(platform_id) references platforms(platform_id)
);
