const userController = require("../../controllers/userController");
const router = require("express").Router();
const entryRoutes = require("./entry");


// entry routes
router.use("/entry", entryRoutes);
router.get("/user", userController.findAll);
 

module.exports = router;
