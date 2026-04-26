import mongoose, { Schema } from "mongoose";

const OnboardingChecklistSchema = new Schema(
    {
        prospectId: {
            type: Schema.Types.ObjectId,
            ref: "Card",
            required: true
        },

        stepNumber: {
            type: Number,
            required: true,
            min: 1,
            max: 10
        },

        title: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            trim: true
        },

        assignee: {
            type: String,
            trim: true
        },

        status: {
            type: String,
            enum: ["todo", "done"],
            default: "todo"
        },

        dueDate: Date
    },
    {
        timestamps: { createdAt: true, updatedAt: false }
    }
);

export default mongoose.model(
    "OnboardingChecklist",
    OnboardingChecklistSchema
);