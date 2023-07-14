const {Thoughts, User} = require('../models');

module.exports = {
    
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thoughts.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createNewThought(req, res) {
        try {
            const thoughts = await Thoughts.create(req.body);

            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thoughts._id } },
                { new: true}
            )

            if(!user){
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getThoughtById(req, res) {
        try {
            const thoughts = await Thoughts.findOne({ _id: req.params.thoughtId })
                .select('-__v');

            if (!thoughts) {
                return res.status(404).json({ message: 'No course with that ID' });
            }

            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateThought(req, res) {
        try {
            const thoughts = await Thoughts.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { new: true, runValidators: true });
            res.status(200).json(thoughts)
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteThought(req, res) {
        try {
            const thoughts = await Thoughts.findOneAndDelete({ _id: req.params.thoughtId });
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async addReaction(req, res) {
        try {
            const thoughts = await Thoughts.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions : req.body } }, { new: true });
            res.status(200).json(thoughts);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteReaction(req, res) {
        try {
            const thoughts = await Thoughts.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { friends: req.params.friendId } }, { new: true });
            res.status(200).json(thoughts);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
};