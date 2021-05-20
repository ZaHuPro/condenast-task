import { Router } from "express";
import { getArticlesController } from "../controllers/articles";

const router = Router();

router.get("/articles", getArticlesController);

export default router;
