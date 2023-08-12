const express = require("express");
const router = express.Router();

const {getalltrack , getalltracktesting} = require("../controllers/mytrack.js")

router.route("/").get(getalltrack);
router.route("/testing").get(getalltracktesting);

module.exports = router;