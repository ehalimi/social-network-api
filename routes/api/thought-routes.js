const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThought);

router.route('/:thoughtId').get(getThoughtById);

router.route('/:userId').post(createThought);

router.route('/:userId').put(updateThought);

router.route('/:userId/:thoughtId').delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/reactions').delete(deleteReaction);

module.exports = router;
