const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
  .get(getThoughts) // Get all thoughts
  .post(createThought); // Create a new thought

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
  .get(getSingleThought) // Get a single thought by its _id
  .put(updateThought)    // Update a thought by its _id
  .delete(deleteThought); // Delete a thought by its _id

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
  .post(addReaction); // Create a reaction to a thought

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction); // Delete a reaction by its reactionId

module.exports = router;
