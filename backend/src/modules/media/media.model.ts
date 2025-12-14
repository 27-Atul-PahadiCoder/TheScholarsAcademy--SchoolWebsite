import { Schema, model, Document } from "mongoose";

export interface IMedia extends Document {
  filename: string;
  url: string;
  mime_type: string;
  size: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const MediaSchema = new Schema<IMedia>(
  {
    filename: { type: String, required: true },
    url: { type: String, required: true, unique: true },
    mime_type: { type: String, required: true },
    size: { type: Number, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

export const MediaModel = model<IMedia>("Media", MediaSchema);
