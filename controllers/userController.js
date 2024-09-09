const { User } = require('../models');

module.exports = {
  // get all users
  getUsers(req, res) {
    User.find({})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  // get user by id
  getUserById(req, res) {
    User.findOne({ _id: req.params.id })
      .then((user) =>
        // if no user is found, we return a 404 status code and a message
        !user
          ? res.status(404).json({ message: 'No user found with this id!' })
          : res.json(user)
      )
      // the catch method is used to handle errors
      .catch(err => res.json(err));
  },
  // create user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch(err => res.json(err));
  },
  // update user
  updateUser(req, res) {
    User.findOneAndUpdate(
      // _id is the id of the user we want to update
      { _id: req.params.id },
      // $set is a mongoose method that specifies which field we want to update
      { $set: req.body },
      // runValidators: true tells mongoose to validate the data
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with this id!' })
          : res.json(user)
      )
      .catch(err => res.json(err));
  },
   // delete user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with this id!' })
          : res.json(user)
      )
      .catch(err => res.json(err));
  },
  // add friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with this id!' })
          : res.json(user)
      )
      .catch(err => res.json(err));
  },
  // delete friend
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with this id!' })
          : res.json(user)
      )
      .catch(err => res.json(err));
  },

};