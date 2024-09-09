const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: { // username is a string
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: { // email is a string
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: [ // thoughts is an array of data that adheres to the thoughtSchema
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
    {
        toJSON: { // this will allow virtuals (like 'friendCount') to be displayed
            virtuals: true,
        },
        id: false
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
}
);

const User = mongoose.model('User', userSchema);

module.exports = User;
