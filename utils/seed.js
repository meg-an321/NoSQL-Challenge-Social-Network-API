// const mongoose = require('mongoose');
const connection = require('../config/connection');
const { initialUserData, initialThoughtData } = require('./data');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
	console.log('Seeding database...');

	await User.deleteMany({});

	await Thought.deleteMany({});

	const users = await User.insertMany(initialUserData);

	const thoughts = await Thought.insertMany(initialThoughtData);

	console.table(users);
	console.table(thoughts);

	console.log('Database seeded successfully!');
	connection.close();

	process.exit(0);
}
);




// async function seedDatabase() {
// 	try {
// 		await User.deleteMany({});
// 		await Thought.deleteMany({});

// 		const users = await User.insertMany(initialUserData);

// 		const thoughts = await Thought.insertMany(initialThoughtData);

// 		console.log('Database seeded successfully!');
// 	} catch (err) {
// 		console.error(err);
// 	} finally {
// 		connection.close();
// 	}
// }

// seedDatabase();