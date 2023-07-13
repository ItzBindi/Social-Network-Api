const {User} = require('../models');

module.exports = {
    
    async allUsers(req, res) {
      try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    async createUser(req, res) {
        try {
          const users = await User.create(req.body);
          res.json(users);
        } catch (err) {
          res.status(500).json(err);
        }
    },
    
    async getUserById(req, res) {
        try {
          const users = await User.findOne({ id: req.params.courseId })
            .select('-__v');
    
          if (!users) {
            return res.status(404).json({ message: 'No course with that ID' });
          }
    
          res.json(users);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      async updateUser(req, res){
        try {
          const users = await User.findOneAndUpdate({id: req.params.courseId}, {$set: req.body}, { new: true, runValidators: true });
          res.status(200).json(users)
        } catch (err) {
          res.status(500).json(err);
        }
      },

    async deleteUser(req, res) {
      try {
        const users = await User.findOneAndDelete({ id: req.params.courseId });
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
    }
  },
    async addFriend(req, res) {
      try {
        const users = await User.findOneAndUpdate({ id: req.params.courseId }, { $addToSet: { friends: req.params.friendId } }, { new: true });
        res.status(200).json(users);
      }
      catch (err) {
        res.status(500).json(err);
      }
    },
    async deleteFriend(req, res) {
      try {
        const users = await User.findOneAndUpdate({ id: req.params.courseId }, { $pull: { friends: req.params.friendId } }, { new: true });
        res.status(200).json(users);
      }
      catch (err) {
        res.status(500).json(err);
    }

    },

  };


