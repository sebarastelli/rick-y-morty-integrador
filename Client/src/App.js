import "./App.css";
import Cards from "./components/Cards.jsx";
import { useState} from "react";
import axios from "axios";
import { Cuerpo } from "./style/styledcomponents";
import Nav from "./components/Nav";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favorites from "./components/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  
  const onSearch = async(id)=>{
    try {
      const {data} = await axios(`https://rickandmortyapi.com/api/character/${id}`)
      if (characters.find((char) => char.id === data.id)) {
        window.alert("Ya existe un personaje con ese ID");
      } 
      else if(data.name){
        setCharacters((oldChars) => [...oldChars, data]);
      }
      else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onClose = (id) => {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
  };

  const randomCard = () => {
    axios("https://rickandmortyapi.com/api/character/").then(({ data }) => {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const randomCharacter = data.results[randomIndex];
      if (characters.find((char) => char.id === randomCharacter.id)) {
        window.alert("Ya existe un personaje con ese ID");
      } else {
        setCharacters((oldChars) => [...oldChars, randomCharacter]);
      }
    });
  };

  const navigate = useNavigate();

  async function login(){
    try {
      navigate('/home');
    } catch (error) {
      console.log(error.message)
    }
  }

  function logOut() {
    navigate("/")
  }

  return (
    <Cuerpo className="App">
      <Nav onSearch={onSearch} randomCard={randomCard} logOut={logOut}/>
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
      </Routes>
    </Cuerpo>
  );
}

export default App;
