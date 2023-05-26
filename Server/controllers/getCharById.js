const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
   
   try { 
    const {id} = req.params
    const {name, gender, origin, status, image, species} = await axios.get(`${URL}${id}`).data
    let character = {
        name, gender, origin, status, image, species
    }
    return character.name ? res.status(200).json(character) : res.status(404).send("Not found")
   }
   catch(error){
    res.status(500).send({error: error.message})
   }
}

module.exports = getCharById;