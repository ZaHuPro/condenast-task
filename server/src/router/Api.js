import { Router } from "express";
import { successRespond } from '../utils/responder'

const router = Router();

router.get("/", (req, res) => {
    return successRespond(res, "Got Msg", 200, { test: "welcome "})
});

export default router;
