const router = require('express').Router();

const {
    allUsers, 
    createUser, 
    getUserById, 
    updateUser, 
    deleteUser, 
    addFriend, 
    deleteFriend
} = require('../../controllers/userController');

router.route('/').get(allUsers).post(createUser);

router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;


