import { Input, BotonRandom, Agregar } from "../style/styledcomponents";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function SearchBar({ onSearch, randomCard }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };
  const location = useLocation();
  if (location.pathname === "/home") {
    return (
      <div>
        <BotonRandom onClick={randomCard}>🎲</BotonRandom>
        <Input type="search" onChange={handleChange} value={id} />
        <Agregar
          onClick={() => {
            onSearch(id);
            setId("");
          }}
        >
          Agregar
        </Agregar>
      </div>
    );
  }
}
