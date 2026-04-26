import Card from "../models/card.schema.js";
import Note from "../models/notes.schema.js";
import Checklist from "../models/checklist.schema.js";

export default class Repositories {
    // CARDS (Prospects)

    async getAllCards() {
        return await Card.find().sort({ createdAt: -1 });
    }

    async getCardById(id) {
        return await Card.findById(id);
    }

    async createCard(data) {
        const card = new Card(data);
        return await card.save();
    }

    async deleteCard(id) {
        return await Card.findByIdAndDelete(id);
    }

    // NOTES (Append-only)

    async addNote(prospectId, content) {
        const note = new Note({ prospectId, content });
        return await note.save();
    }

    async getNotesByProspect(prospectId) {
        return await Note.find({ prospectId }).sort({ createdAt: -1 });
    }

    // ONBOARDING CHECKLIST

    async getChecklistByProspect(prospectId) {
        return await Checklist.find({ prospectId }).sort({ stepNumber: 1 });
    }

    async createChecklistItems(items) {
        return await Checklist.insertMany(items);
    }

    async checklistExists(prospectId) {
        return await Checklist.exists({ prospectId });
    }

    async updateChecklistStatus(id, status) {
        return await Checklist.findByIdAndUpdate(
            id,
            { $set: { status } },
            { new: true, runValidators: true }
        );
    }
}