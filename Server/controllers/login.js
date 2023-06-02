const User = require("../DB_connection")


module.exports = async (req, res) => {
  try {
      const { email, password } = req.query;
      if (!email || !password) {
          return res.status(400).json({ message: 'Faltan datos' });
      }

      const user = await User.findOne({ where: { email }});

      if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

      return user.password === password
      ? res.json({access: true})
      : res.status(403).send('Contraseña incorrecta') ;

  } catch (error) {
      res.status(500).json({error:error.message});
      console.log(error)
  }
}

