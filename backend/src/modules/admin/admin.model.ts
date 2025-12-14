import mongoose, { Schema, Document } from "mongoose";

export interface IAdmin extends Document {
  email: string;
  name: string;
  password_hash: string;
  role: "admin" | "editor";
  createdAt: Date;
}

const AdminSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password_hash: { type: String, required: true },
  role: { type: String, enum: ["admin", "editor"], default: "admin" },
  createdAt: { type: Date, default: Date.now },
});

export const AdminModel = mongoose.model<IAdmin>("Admin", AdminSchema, "admins");
