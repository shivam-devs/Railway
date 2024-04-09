import {Router} from 'express'
const router = Router();
import {
  createUser,
  getUser,
  getAllUsers,
  deleteUser,
  returnCurrentUser,
} from "../controllers/user.js";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";
router.post("/", createUser);
router.get("/:id", isAuthenticated, getUser);
router.get("/", isAdmin, getAllUsers);
router.delete("/:id", isAuthenticated, deleteUser);
router.get("/return/current", isAuthenticated, returnCurrentUser);

export default router;
