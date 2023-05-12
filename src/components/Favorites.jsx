import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { Tarjetas } from "../style/styledcomponents";
import { filterCards, orderCards } from "../redux/actions";


function Favorites({ onClose }) {
  const favorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
  };
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };
 

  return (
    <div>
      <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {favorites.length === 0 ? (
        <div style={{ height: "100vh" }}></div>
      ) : (
        <Tarjetas>
          {favorites.map((fav) => {
            return (
              <Card
                key={fav.id}
                id={fav.id}
                name={fav.name}
                status={fav.status}
                species={fav.species}
                gender={fav.gender}
                origin={fav.origin?.name}
                image={fav.image}
                onClose={onClose}
              />
            );
          })}
        </Tarjetas>
      )}
    </div>
  );
}

export default Favorites;
