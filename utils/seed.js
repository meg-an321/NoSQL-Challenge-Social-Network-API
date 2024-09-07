const mongoose = require('mongoose');
const connection = require('../config/connection');
const { initialUserData, initialThoughtData } = require('./data');
const { User, Thought } = require('../models');

async function seedDatabase() {
	try {
		await User.deleteMany({});
		await Thought.deleteMany({});

		const users = await User.insertMany(initialUserData);

		const thoughts = await Thought.insertMany(initialThoughtData);

		console.log('Database seeded successfully!');
	} catch (err) {
		console.error(err);
	} finally {
		connection.close();
	}
}

seedDatabase();