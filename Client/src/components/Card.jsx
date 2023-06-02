import { Name, BotonFavorito, Boton, Tarjeta } from "../style/styledcomponents";
import { Link } from "react-router-dom";
import { addFavorite,  remFavorite } from "../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      return dispatch(addFavorite(character));
    },
    remFavorite: (id) => {
      return dispatch(remFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFavorite,
  remFavorite,
  myFavorites,
}) {
  useEffect(() => {
   
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myFavorites]);

  const [IsFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (IsFav) {
      setIsFav(false);
      remFavorite(id);
      
    } else {
      setIsFav(true);
      addFavorite({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
        onClose,
      });
    }
  };

  return (
    <Tarjeta>
      {IsFav ? (
        <BotonFavorito onClick={handleFavorite}>
          <StarFilled
            style={{
              fontSize: "25px",
              color: "yellow",
              border: "1x solid black",
            }}
          />
        </BotonFavorito>
      ) : (
        <BotonFavorito onClick={handleFavorite}>
          <StarOutlined style={{ fontSize: "25px" }} />
        </BotonFavorito>
      )}
      <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
      <img src={image} alt="" />
      </Link>
      <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
        <Name> Nombre: {name} </Name>
      </Link>
      <h2> Estado: {status} </h2>
      <h2> Especie: {species} </h2>
      <h2> Genero: {gender} </h2>
      <h2> Origen: {origin} </h2>
      {!IsFav && <Boton onClick={() => onClose(id)}>Cerrar</Boton>}
    </Tarjeta>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
