const { User } = require('../models');

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .populate('thoughts friends')
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // get user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate('thoughts friends')
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(user);
      })
      .catch((err) => res.status(500).json(err));
  },
  // create user
  createUser({ body }, res) {
    User.create(body)
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json(err));
  },
  // update user by id
  updateUser({ params, body }, res)
  {
    User.findOneAndUpdate({ _id: params.id
    }, body, { new: true, runValidators: true })
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(user);
      })
      .catch((err) => res.status(400).json(err));
  }
};

module.exports = userController;
