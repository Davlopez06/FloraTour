const { Router } = require('express')
const axios = require('axios');
const router = Router()
const plantaSchema= require("../models/plant.js")
const {createPlants, getPlants, postPlants, putPlants, deletePlants} = require("../controllers/plant.js")
// const {getPokemons, getPokemonsDetail,postPokemons,deletePokemons} = require("../controllers/pokemon.js");
// const {getTypes} = require("../controllers/types.js")

router.get("/create", createPlants )
router.get("/plants", getPlants)
router.post("/plants", postPlants)
router.put("/plants", putPlants)
router.delete("/plants/:id", deletePlants )
// router.get("/pokemons/:id", getPokemonsDetail)
// router.post("/pokemons", postPokemons)
// router.delete("/pokemons/:id", deletePokemons )
// router.get("/types", getTypes )

module.exports = router 