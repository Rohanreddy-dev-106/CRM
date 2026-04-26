import mongoose, { Schema } from "mongoose";
const CardSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        school: {
            type: String,
            required: true,
            trim: true
        },

        role: {
            type: String,
            trim: true
        },

        email: {
            type: String,
            trim: true
        },

        phone: {
            type: String,
            trim: true
        },

        source: {
            type: String
        },

        stage: {
            type: String,
            enum: [
                "Cold",
                "Contacted",
                "Demo Booked",
                "Demo Done",
                "Proposal Sent",
                "Pilot Closed"
            ],
            default: "Cold"
        },

        lastContactDate: Date,
        nextFollowUpDate: Date
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Card", CardSchema);