import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.redirect("/public");
});

export default router;
