import { Router } from "express";
import { getTechs, postTech } from '../controllers/tech.controller.js'
const router = Router();

router.route('/').get(getTechs).post(postTech);

export default router;