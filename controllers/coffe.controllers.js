const Coffee = require('../models/Coffe.model')

module.exports.coffeControllers = {
    getDrinks: async ( req , res ) => {
        try{ 
            const drinks = await Coffee.find({} , 'name price')
            res.json(drinks)
            
        }catch (err) {
            res.json(err)
        }

    },

    getDrinksInStock: async (req , res ) => {
        try{
            const DrinksInStock = await Coffee.find({} , 'inStock')
            res.json(DrinksInStock)
        } catch (err) {
            res.json(err)
        }

    },

    getDrinksInDetail:  async (req , res ) =>{
        try{
            const drinksId = await Coffee.findById() 
            res.json(drinksId)
        } catch (err) {
            res.json(err)
        }

    },

    getAddDrinks: async ( req , res ) => {
        try{
            await Coffee.create({ name: req.body.name,
                price: req.body.price,
                isInStock: req.body.isInStock,
                hasCaffeine: req.body.hasCaffeine,
                volume: req.body.volume,
                description: req.body.description,})
            res.json('Напиток добавлен')
        }catch (err) {
            res.json(err)
        }
    },

    getDeleteDrinks: async ( req , res ) => {
        try{
            await Coffee.findByIdAndRemove(req.params.id)
            res.json(`Напиток с id ${req.params.id} удален `)
        }catch (err) {
            res.json(err)
        }
    },

    getChangeDrinks: async (req , res ) => {
        try {
            await Coffee.findByAndUpdate(req.params.id)
            res.json(`Напиток с id ${req.params.id} изменен `)
        }catch (err) {
            res.json(err)
        }

    }

    
}
 