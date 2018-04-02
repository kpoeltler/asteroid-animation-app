const router = require("express").Router();
const entryRoutes = require("./entry");

// entry routes
router.use("/entry", entryRoutes);

module.exports = router;
