import {Router} from 'express'
const router = Router();
import {
  getBooks,
  deleteBook,
  getBook,
} from "../controllers/book.js";

import {  isAuthenticated } from "../middlewares/auth.js";

router.get("/", isAuthenticated, getBooks);
router.get("/:id", isAuthenticated, getBook);
router.delete("/:id", isAuthenticated, deleteBook);

export default router;
