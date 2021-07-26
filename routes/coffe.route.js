const { Router } = require('express')

const { coffeControllers } = require("../controllers/coffe.controllers")

const router = Router();

router.get("/drinks" , coffeControllers.getDrinks)
router.get("/drinks/in-stock" , coffeControllers.getDrinksInStock)
router.get("/drinks/:id" , coffeControllers.getDrinksInDetail)
router.post("/drinks" , coffeControllers.getAddDrinks)
router.patch("/drinks/:id", coffeControllers.getChangeDrinks)
router.delete("/drinks/:id", coffeControllers.getDeleteDrinks)


module.exports = router