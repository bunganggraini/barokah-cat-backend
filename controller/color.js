const { Color } = require("../models")
const {Op} = require("sequelize")

const getColorByCategory = async (req, res) => {
    try{
        const categoryId = req.params.categoryId
        console.log("Masuk ke handler getColorsByCategory");

        const {category_id} = req.params
        const color = await Color.findAll({where: {category_id}})
        res.json(color)
    } catch (error){
        console.error("Error terjadi:", error)
        res.status(500).json({ error: "Database error",details: error.message})
    }
}

const getColorById = async (req, res) => {
    try{
        const {id} = req.params
        const color = await Color.findOne({ where: { id: parseInt(id) } })
        res.json(color)
    }catch(error){
        res.status(404).json({ message: "Warna tidak ditemukan" })
    }
}

const getColorBySearch = async (req, res) => {
    try {
        console.log("Query Parameters:", req.query)
        const searchQuery = req.query.query
        let whereCondition = {}
        
        if (searchQuery){
            whereCondition = {
                [Op.or] : [
                    {name: {[Op.like] : `%${searchQuery}%`}},
                    {category_cat: {[Op.like] : `%${searchQuery}%`}},
                    {brand: {[Op.like] : `%${searchQuery}%`}}
                ]
            }
        }

        console.log("Where Condition:", whereCondition)
        const colors = await Color.findAll({where: whereCondition})
        res.json(colors)
    }catch(error){
        console.error("Error karena: ",error)
        res.status(500).json({error: "Database error",details: error.message})
    }
}

module.exports = {getColorByCategory, getColorById, getColorBySearch}