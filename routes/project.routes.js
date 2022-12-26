import { Router } from "express";
import { getProjects, postProject } from '../controllers/project.controller.js'
const router = Router();

router.route('/').get(getProjects).post(postProject);

export default router;