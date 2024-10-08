//add the following code to the file to create the thought controller:
const { Thought, User } = require('../models');

module.exports = {
  // get all thoughts
  getThoughts(req, res) {
    Thought.find({})
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  // get thougth by id
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.id })
    // .select means that we don't want the __v field to be returned
      .select('-__v')
      // we use the .then() method to return the thought data
      .then((thought) =>
        !thought
      // if no thought is found, we return a 404 status code and a message
          ? res.status(404).json({ message: 'No thought found with this id!' })
      // if a thought is found, we return the thought data
          : res.json(thought))
  },
  // create thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch(err => res.json(err));
  },
  // update thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought found with this id!' })
          : res.json(thought)
      )
      .catch(err => res.json(err));
  },
  // delete thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.id })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought found with this id!' })
          : res.json(thought)
      )
      .catch(err => res.json(err));
  },

  // create reaction
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought found with this id!' })
          : res.json(thought)
      )
      .catch(err => res.json(err));
  },
  // delete reaction
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      //_id is the thoughtId 
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
    // we use the .then() method to return the updated thought data
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought found with this id!' })
          : res.json(thought)
      )
      //the .catch() method to return any errors that occur
      .catch(err => res.json(err));
  },

};

