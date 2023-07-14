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
          const users = await User.findOne({ _id: req.params.userId })
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
          const users = await User.findOneAndUpdate({_id: req.params.userId}, {$set: req.body}, { new: true, runValidators: true });
          res.status(200).json(users)
        } catch (err) {
          res.status(500).json(err);
        }
      },

    async deleteUser(req, res) {
      try {
        const users = await User.findOneAndDelete({ _id: req.params.userId });
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
    }
  },
    async addFriend(req, res) {
      try {
        const users = await User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true });
        res.status(200).json(users);
      }
      catch (err) {
        res.status(500).json(err);
      }
    },
    async deleteFriend(req, res) {
      try {
        const users = await User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true });
        res.status(200).json(users);
      }
      catch (err) {
        res.status(500).json(err);
    }

    },

  };


