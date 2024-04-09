import {Router} from 'express'
const router = Router();
import  {
  getTrains,
  postTrain,
  getTrain,
  deleteTrain,
} from "../controllers/train.js";
import { isAdmin} from "../middlewares/auth.js";

router.get("/:id", getTrain);
router.post("/", isAdmin, postTrain);
router.post("/search", getTrains);
router.delete("/", isAdmin, deleteTrain);

export default router;
