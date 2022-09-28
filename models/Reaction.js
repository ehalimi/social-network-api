const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: { 
            type: String,
            required: true,
            maxLength: 300
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true,
        toJSON: {
            getters: true,
        },
    }
);

const Reaction = model('Reaction', ReactionSchema);

module.exports = { Reaction };

