const Favorite = require("../DB_connection");

const postFav = async(req,res)=>{
    const {name, origin, status, image, species, gender} = req.body
    try {
        if(!name || !origin || !status || !image || !species || !gender){res.status(401).send("Faltan Datos")}
        const favoritesFound = await Favorite.findOrCreate({where: {name: name, origin: origin, status: status, image: image, species: species, gender: gender}})
        const favoriteAll = await Favorite.findAll();
        res.status(200).json(favoriteAll)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = postFav;