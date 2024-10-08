const router = require('express').Router();

const { // import all the functions from the thought controller
    createThought,
    getThoughts,
    getThoughtById,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

router.route('/')
    .get(getThoughts)
    .post(createThought);

router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions')
    .delete(deleteReaction)
    .post(createReaction);

module.exports = router;






















// const router = require('express').Router();

// const {
//     getThought,
//     getSingleThought,
//     createThought,
//     updateThought,
//     deleteThought,
//     createReaction,
//     deleteReaction
// } = require('../../controllers/thoughtController');

// // /api/thoughts GET all and POST thought
// router.route('/').get(getThought).post(createThought);

// // /api/thoughts/:thoughtId GET one thought, PUT and DELETE by iD
// router.route('/:thoughtId')
// .get(getSingleThought)
// .put(updateThought)
// .delete(deleteThought);

// //  /api/thoughts/:thoughtId/reactions POST new reactions
// router.route('/:thoughtId/reactions')
// .post(createReaction);

// // /api/thoughts/:thoughtId/reactions/:reactionId DELETE reaction by ID
// router.route('/:thoughtId/reactions/:reactionId')
// .delete(deleteReaction);


// module.exports = router;
