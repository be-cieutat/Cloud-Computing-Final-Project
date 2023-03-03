DROP DATABASE IF EXISTS dnd;
CREATE DATABASE IF NOT EXISTS dnd;
USE dnd;

DROP TABLE IF EXISTS objects;

CREATE TABLE IF NOT EXISTS objects(
	name VARCHAR(50) PRIMARY KEY NOT NULL,
    type VARCHAR(50),
    image VARCHAR(200),
    details VARCHAR(200)
);


INSERT INTO objects VALUES ("Deck of Many Things","Magical set of cards","image","details");
INSERT INTO objects VALUES ("Deathwalker's Ward","Armor (Studded Leather)","image","details");


select * from objects;