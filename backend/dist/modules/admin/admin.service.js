import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AdminModel } from "./admin.model";
import { env } from "../../config/env";
export class AdminService {
    async ensureSeedUser() {
        // For simplicity, we'll delete the user if it exists to ensure the password is set correctly.
        // In a real-world scenario, you would have a more robust "update password" or "forgot password" flow.
        await AdminModel.deleteOne({ email: "founder@school.com" }).exec();
        const hashed = await bcrypt.hash("schol@r2025", 12);
        const user = new AdminModel({
            email: "founder@school.com",
            name: "Super Admin",
            password_hash: hashed,
            role: "admin",
        });
        await user.save();
        return user;
    }
    async login(email, password) {
        const user = await AdminModel.findOne({ email }).exec();
        if (!user) {
            return null;
        }
        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) {
            return null;
        }
        const token = this.generateToken(user.id, user.role);
        return {
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            },
        };
    }
    generateToken(id, role) {
        return jwt.sign({ sub: id, role }, env.JWT_SECRET, { expiresIn: "8h" });
    }
}
//# sourceMappingURL=admin.service.js.map