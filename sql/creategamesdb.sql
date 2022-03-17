DROP SCHEMA IF EXISTS civilisation_games_proj;
CREATE SCHEMA civilisation_games_proj;
use civilisation_games_proj;


CREATE TABLE publisher(
    publisher_id INT AUTO_INCREMENT PRIMARY KEY,
    name_pub VARCHAR(255)
    
);
INSERT INTO publisher (name_pub) values ('Bethesda'), ('EA'), ('Activision');
-- SELECT * FROM publisher;
CREATE TABLE platforms(
    platform_id INT AUTO_INCREMENT PRIMARY KEY,
    name_plat VARCHAR(255)
    
);
INSERT INTO platforms (name_plat) values ('Xbox 360'), ('PS3'), ('PC');
-- SELECT * platforms;
CREATE table games (
    games_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    publisher_id int,
    CONSTRAINT FK_publisher FOREIGN KEY(publisher_id) references publisher(publisher_id),
    year_pub INT,
    platform_id int,
    CONSTRAINT FK_platform FOREIGN KEY(platform_id) references platforms(platform_id)
);
INSERT INTO games (title,publisher_id, year_pub, platform_id ) values ('Elder Scrolls V: Skyrim', 1,2010,1), ('FIFA',2,2013,2), ('Call Of Duty Black Ops',3,2013,3);
-- SELECT * FROM games;