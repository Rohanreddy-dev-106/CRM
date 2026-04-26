import mongoose from "mongoose";

const { Schema } = mongoose;

const NoteSchema = new Schema(
    {
        prospectId: {
            type: Schema.Types.ObjectId,
            ref: "Card",
            required: true
        },

        content: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: { createdAt: true, updatedAt: false }
    }
);

export default mongoose.model("Cardnote", NoteSchema);