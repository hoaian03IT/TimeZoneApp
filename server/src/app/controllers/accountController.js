import userAccount from "../models/userAccount.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class Controller {
    // [POST] /user/sign-up
    async createAccount(req, res) {
        try {
            const { fullName, phoneNumber, username, password } = req.body;
            const existedPhoneNumber = await userAccount.findOne({ phoneNumber: phoneNumber });
            const existedUsername = await userAccount.findOne({ username: username });
            if (existedPhoneNumber) return res.status(400).json({ msg: "The phone number already exists" });
            if (existedUsername) return res.status(400).json({ msg: "The username already exists" });

            // Encrypt password
            const passwordHash = bcrypt.hashSync(password, 10);

            const newUser = new userAccount({
                fullName,
                phoneNumber,
                username,
                password: passwordHash,
                role: "user",
            });

            await newUser.save();

            res.status(200).json({ msg: "Create account successfully!" });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    // [POST] /user/login
    async login(req, res) {
        try {
            const { username, password } = req.body;
            const validUser = await userAccount.findOne({ username });
            if (!validUser) return res.status(400).json({ msg: "Username or password is wrong" });

            const isMatch = await bcrypt.compare(password, validUser.password);

            if (!isMatch) return res.status(400).json({ msg: "Username or password is wrong" });

            // If login success, create access token and refresh token
            const accessToken = createAccessToken({ id: validUser._id.toString() });
            const refreshToken = createRefreshToken({ id: validUser._id });

            // save cookie refresh token
            // res.cookie("refreshToken", refreshToken, {
            //     httpOnly: true,
            //     path: "/user/refresh_token",
            //     maxAge: 7 * 24 * 60 * 60 * 1000, // 7d,
            // });

            res.status(200).json({ msg: "Login successfully!", accessToken, refreshToken, user: validUser });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // [GET] /user/logout
    logout(req, res) {
        req.clearCookie(refreshToken, { path: "/user/refresh_token" });
        res.status(200).json({ msg: "Logged out" });
    }

    // [GET] /user/info
    async getUser(req, res) {
        try {
            const user = await userAccount.findById(req.user.id).select("-password"); // remove field password
            if (!user) return res.status(400).json({ msg: "Username does not exist" });

            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // [POST] /user/refresh_token
    refreshToken(req, res) {
        try {
            const { refreshToken } = req.body;
            if (!refreshToken) return res.status(400).json({ msg: "Please Login or Sign up" });

            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) return res.status(400).json({ msg: "Please Login or Sign up" });
                const accessToken = createAccessToken({ id: user.id });
                res.json({ user, accessToken });
            });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
}

const createAccessToken = (user) => jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
const createRefreshToken = (user) => jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });

const accountController = new Controller();

export { accountController };
