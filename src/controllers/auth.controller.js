import {
    createAuthToken,
    loginUser,
    registerUser
} from "../service/auth.service.js";

function tokenCookieOptions() {
    return {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000
    };
}

export default class AuthController {
    async register(req, res) {
        try {
            const user = await registerUser(req.body);
            const token = createAuthToken(user);

            res.cookie("token", token, tokenCookieOptions());
            return res.status(201).json({ success: true, data: { user, token } });
        } catch (error) {
            const statusCode = error.message === "Email is already registered" ? 409 : 400;
            return res.status(statusCode).json({ success: false, message: error.message });
        }
    }

    async login(req, res) {
        try {
            const user = await loginUser(req.body);
            const token = createAuthToken(user);

            res.cookie("token", token, tokenCookieOptions());
            return res.status(200).json({ success: true, data: { user, token } });
        } catch (error) {
            return res.status(401).json({ success: false, message: error.message });
        }
    }

    async me(req, res) {
        return res.status(200).json({ success: true, data: req.user });
    }

    async logout(req, res) {
        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production"
        });

        return res.status(200).json({ success: true, message: "Logged out" });
    }
}
