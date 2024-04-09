import {Router} from 'express'
const router = Router();
import { loginUser, logoutUser } from "../controllers/auth.js";

router.post("/login", loginUser);
router.get("/logout", logoutUser);

export default router;
