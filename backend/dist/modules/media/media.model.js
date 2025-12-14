import { Schema, model } from "mongoose";
const MediaSchema = new Schema({
    filename: { type: String, required: true },
    url: { type: String, required: true, unique: true },
    mime_type: { type: String, required: true },
    size: { type: Number, required: true },
    description: { type: String },
}, { timestamps: true });
export const MediaModel = model("Media", MediaSchema);
//# sourceMappingURL=media.model.js.map