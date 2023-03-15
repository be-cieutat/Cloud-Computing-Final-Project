// Init Mongo Script

db.createUser({
  user: 'myuser',
  pwd: 'mypassword',
  roles: [{ role: 'readWrite', db: 'mydb' }]
});

db = db.getSiblingDB('mydb');
db.mycollection.insertMany([
  { prénom: 'pacôme', nom: 'manceaux', majeure: 'CCC' },
  { prénom: 'paul', nom: 'soret', majeure: 'MNM' },
  { prénom: 'alix', nom: 'blain', majeure: 'IND' },
  { prénom: 'anne', nom: 'sounanthanam', majeure: 'IOS' },
  { prénom: 'basile', nom: 'puiseux', majeure: 'IOS' },
  { prénom: 'alice', nom: 'bahani', majeure: 'IOS' }
]);

print('Data imported successfully');