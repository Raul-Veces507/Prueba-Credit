const router = require("express").Router();

const controller = require("../controllers/credit.controller");

router.post("/", controller.create);

router.get("/", controller.findAll);

router.patch("/:id/status", controller.updateStatus);

module.exports = router;