import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  TarjetasDetail,
  ImagenDetail,
  Detalles,
  DetallesImg,
} from "../style/styledcomponents";

export default function Detail() {
  const [character, setCharacter] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <TarjetasDetail>
      <Detalles>
        <h1>NOMBRE | {character.name}</h1>
        <h2>ESTADO | {character.status} </h2>
        <h2>ESPECIE | {character.species} </h2>
        <h2>GENERO | {character.gender} </h2>
        <h2>ORIGEN | {character.origin?.name} </h2>
      </Detalles>
      <DetallesImg>
        <ImagenDetail src={character.image} alt="img" />
      </DetallesImg>
    </TarjetasDetail>
  );
}
