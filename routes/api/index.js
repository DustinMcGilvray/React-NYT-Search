const router = require("express").Router();
const articleRoutes = require("./articles");
const articleController = require("../../controllers/articleController");


// Article Routes
router.use("/articles", articleRoutes);

router.post("/saved", articleController.saveArticle);

module.exports = router;