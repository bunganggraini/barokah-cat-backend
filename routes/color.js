const express = require("express")
const router = express.Router()

const {getColorByCategory} = require ("../controller/color")
const {getColorById} = require ("../controller/color")
const {getColorBySearch} = require ("../controller/color")

router.get("/color/:category_id", getColorByCategory)

router.get("/detail_color/:id", getColorById)

router.get("/search", getColorBySearch)

module.exports = router