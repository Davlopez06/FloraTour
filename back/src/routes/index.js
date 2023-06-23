const { Router } = require('express')
const axios = require('axios');
const router = Router()
const plantaSchema= require("../models/plant.js")
const { getPlants, postPlants, putPlants, deletePlants} = require("../controllers/plant.js")

router.get("/plants", getPlants)
router.post("/plants", postPlants)
router.put("/plants", putPlants)
router.delete("/plants/:id", deletePlants )

module.exports = router 