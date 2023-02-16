import express from "express";
import { accountController } from "../app/controllers/accountController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/info", auth, accountController.getUser);
router.get("/logout", accountController.logout);
router.post("/refresh_token", accountController.refreshToken);
router.post("/login", accountController.login);
router.post("/sign-up", accountController.createAccount);

export default router;
