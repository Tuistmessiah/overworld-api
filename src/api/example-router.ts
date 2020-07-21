import { Router } from "express";
const router = Router();

const acrud = require("./endpoints/acrud");

const ENTITY_NAME = "example";

router.get("/", (req, res) => {
  return res.json({ message: `${ENTITY_NAME}` });
});

router.get("/all", acrud(ENTITY_NAME).all);
router.post("/new", acrud(ENTITY_NAME).create);
router.get("/:id", acrud(ENTITY_NAME).read);
router.put("/update/:id", acrud(ENTITY_NAME).update);
router.delete("/:id", acrud(ENTITY_NAME).delete);

export default router;
