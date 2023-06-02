const Favorite = require("../DB_connection");

const deleteFav = async(req,res)=>{
    const{id} = req.params
    try {
        const favorite = await Favorite.findByPk(id)
        if(!favorite){return res.status(404).json({message: "personaje no encontrado"})}
        await favorite.destroy()
        const favoriteAll = await Favorite.findAll();
        res.status(200).json({favoriteAll})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports= deleteFav;