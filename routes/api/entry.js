const router = require("express").Router();
const entryController = require("../../controllers/entryController");

router.route("/")
  .get(entryController.findAll)
  .post(entryController.create);
  
router
  .route("/:id")
  .get(entryController.findById)
  .put(entryController.update)
  .delete(entryController.remove);

  router
  .route("/asteroid/:id")
  // .get(entryController.findByAsteroid)
  .put(entryController.update)
  .delete(entryController.remove);

  router
  .route("/orbit/:id")
  .get(entryController.findByOrbit)
  .put(entryController.update)
  .delete(entryController.remove);

  router
  .route("/entry")
  // .get(entryController.findEntry)
  .post(entryController.create);

module.exports = router;


