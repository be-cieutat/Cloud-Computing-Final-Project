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


INSERT INTO objects VALUES ("Deck of Many Things","Wondrous item","deck.jpg","https://www.aidedd.org/dnd/om.php?vo=deck-of-many-things");
INSERT INTO objects VALUES ("Sword of Kas","Wondrous item","sword-of-kas.jpg","https://www.aidedd.org/dnd/om.php?vo=sword-of-kas");
INSERT INTO objects VALUES ("Ring of three wishes","Ring","ring-of-three-wishes.jpg","https://www.aidedd.org/dnd/om.php?vo=ring-of-three-wishes");
INSERT INTO objects VALUES ("Staff of the magi","Staff","staff-of-the-magi.jpg","https://www.aidedd.org/dnd/om.php?vo=staff-of-the-magi");
INSERT INTO objects VALUES ("Scarab of protections","Wondrous item","scarab-of-protections.jpg","https://www.aidedd.org/dnd/om.php?vo=scarab-of-protection");
INSERT INTO objects VALUES ("Robe of the archmagi","Wondrous item","robe-of-the-archmagi.jpg","https://www.aidedd.org/dnd/om.php?vo=robe-of-the-archmagi");
INSERT INTO objects VALUES ("Hammer of thunderbolts","Weapon","hammer-of-thunderbolts.jpg","https://www.aidedd.org/dnd/om.php?vo=hammer-of-thunderbolts");

select * from objects;