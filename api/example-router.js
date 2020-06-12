const { Router } = require("express");
const router = new Router();

const ENTITY_NAME = "example";

router.get("/", (req, res) => {
  return res.json({ message: `${ENTITY_NAME}` });
});

module.exports = router;
