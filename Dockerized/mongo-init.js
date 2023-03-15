// Init Mongo Script

db.createUser({
  user: 'myuser',
  pwd: 'mypassword',
  roles: [{ role: 'readWrite', db: 'mydb' }]
});

db = db.getSiblingDB('itemdb');
db.mycollection.insertMany([

{ name: 'Deck of Many Things', type: 'Wondrous item', image: 'deck.jpg', url: 'https://www.aidedd.org/dnd/om.php?vo=deck-of-many-things' },
{ name: 'Sword of Kas', type: 'Wondrous item', image: 'sword-of-kas.jpg', url: 'https://www.aidedd.org/dnd/om.php?vo=sword-of-kas' },
{ name: 'Ring of three wishes', type: 'Ring', image: 'ring-of-three-wishes.jpg', url: 'https://www.aidedd.org/dnd/om.php?vo=ring-of-three-wishes' },
{ name: 'Staff of the magi', type: 'Staff', image: 'staff-of-the-magi.jpg', url: 'https://www.aidedd.org/dnd/om.php?vo=staff-of-the-magi' },
{ name: 'Scarab of protections', type: 'Wondrous item', image: 'scarab-of-protections.jpg', url: 'https://www.aidedd.org/dnd/om.php?vo=scarab-of-protection' },
{ name: 'Robe of the archmagi', type: 'Wondrous item', image: 'robe-of-the-archmagi.jpg', url: 'https://www.aidedd.org/dnd/om.php?vo=robe-of-the-archmagi' },
{ name: 'Hammer of thunderbolts', type: 'Weapon', image: 'hammer-of-thunderbolts.jpg', url: 'https://www.aidedd.org/dnd/om.php?vo=hammer-of-thunderbolts' },
{ name: 'Ring of regeneration', type: 'Ring', image: 'ring-of-regeneration.jpg', url: 'https://www.aidedd.org/dnd/om.php?vo=ring-of-regeneration' },
{ name: 'Cube of force', type: 'Wondrous item', image: 'cube-of-force.jpg', url: 'https://www.aidedd.org/dnd/om.php?vo=cube-of-force' },
{ name: 'Bag of holding', type: 'Wondrous item', image: 'bag-of-holding.jpg', url: 'https://www.aidedd.org/dnd/om.php?vo=bag-of-holding' },
{ name: 'Belt of dwarvenkind', type: 'Wondrous item', image: 'belt-of-dwarvenkind.jpg', url: 'https://www.aidedd.org/dnd/om.php?vo=belt-of-dwarvenkind' },
{ name: 'Driftglobe', type: 'Wondrous item', image: 'driftglobe.jpg', url: 'https://www.aidedd.org/dnd/om.php?vo=driftglobe' },
{ name: 'Orb of dragonkind', type: 'Wondrous item', image: 'orb-of-dragonkind.jpg', url: 'https://www.aidedd.org/dnd/om.php?vo=orb-of-dragonkind' },

]);
print('Data imported successfully');