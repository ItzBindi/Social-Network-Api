const { Schema, Types, model } = require('mongoose');


const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    responseBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const thoughtSchema = new Schema ({
thoughtText: {
  type: String,
  required: true,
  maxLength: 280,
  minLength: 1,
},
createdAt: {
  type: Date,
  default: Date.now,
},
username: {
  type: String,
  required: true,
},
reactions: [reactionSchema]
},
{
  toJSON: {
    getters: true
  }
}
);

thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions;
});

const Thoughts = model('thought', thoughtSchema);

module.exports = Thoughts;