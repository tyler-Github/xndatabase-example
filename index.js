const XNDatabase = require('xndatabase');

// Create a new database
const myDB = new XNDatabase('My Database');

// Add tables to the database
myDB.addTable('users', {
  name: 'string',
  age: 'number',
  email: 'string'
});

myDB.addTable('posts', {
  title: 'string',
  content: 'string',
  author: 'string'
});

// Save the database to a file
myDB.saveToFile('./my-database.xn');

// Load the database from a file
const loadedDB = XNDatabase.loadFromFile('./my-database.xn');

// Access the tables and fields in the loaded database
const usersTable = loadedDB.tables.users;
const postsTable = loadedDB.tables.posts;

const userName = usersTable.fields.name;
const postTitle = postsTable.fields.title;
