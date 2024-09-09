// const mongoose = require('mongoose');
const connection = require('../config/connection');
const { initialUserData, initialThoughtData } = require('./data');
const { User, Thought } = require('../models');

// Connect to the database or log an error if the connection fails
connection.on('error', (err) => err);

// Connect to the database and seed the data
connection.once('open', async () => {
	console.log('Seeding database...');

// await is used to wait for the Promise to resolve before moving on to the next line of code
	await User.deleteMany({});

	await Thought.deleteMany({});

// The insertMany() method is used to insert multiple documents into the database
	const users = await User.insertMany(initialUserData);

	const thoughts = await Thought.insertMany(initialThoughtData);

// console table is used to display data in a table format
	console.table(users);
	console.table(thoughts);

	console.log('Database seeded successfully!');
	connection.close();
	
// The process.exit() method is used to exit the Node.js process with an exit code
	process.exit(0);
}
);