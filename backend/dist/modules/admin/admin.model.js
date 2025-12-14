import mongoose, { Schema } from "mongoose";
const AdminSchema = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password_hash: { type: String, required: true },
    role: { type: String, enum: ["admin", "editor"], default: "admin" },
    createdAt: { type: Date, default: Date.now },
});
export const AdminModel = mongoose.model("Admin", AdminSchema, "admins");
//# sourceMappingURL=admin.model.js.map