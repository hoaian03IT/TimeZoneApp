import jwt from "jsonwebtoken";

async function auth(req, res, next) {
    try {
        // access token
        const token = req.header("Authorization");
        if (!token) return res.status(400).json({ msg: "Invalid Authentication1" });

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return res.status(400).json({ msg: "Invalid Authentication2" });

            req.user = user;
            next();
        });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export { auth };
