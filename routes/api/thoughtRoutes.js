
const router = require('express').Router();


router.route('/').get(getAllThoughts).post(createNewThought);

router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);