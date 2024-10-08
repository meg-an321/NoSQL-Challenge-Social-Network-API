const initialUserData = [ // array of username and email data
	  {
		username: 'user1',
		email: 'user1@example.com',
	  },
	  {
		username: 'user2',
		email: 'user2@example.com',
	  },
	  {
		username: 'user3',
		email: 'user3@example.com',
	  },
];

const initialThoughtData = [ // array of thoughtText and username data
	  {
		thoughtText: 'This is the first thought!',
		username: 'user1',
	  },
	  {
		thoughtText: 'This is the second thought	!',
		username: 'user2',
	  },
	  {
		thoughtText: 'This is the third thought!',
		username: 'user3',
	  },
];

const initialReactionData = [ // array of reactionBody and username data
	  {
		reactionBody: 'This is the first reaction!',
		username: 'user2',
	  },
	  {
		reactionBody: 'This is the second reaction!',
		username: 'user3',
	  },
	  {	
		reactionBody: 'This is the third reaction!',
		username: 'user1',
	  },
];

module.exports = { 
	initialUserData,
	initialThoughtData,
	initialReactionData,
};