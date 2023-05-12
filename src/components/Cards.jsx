import Card from "./Card";
import { Tarjetas } from "../style/styledcomponents";

export default function Cards({ characters, onClose }) {
  return (
    <div>
      {characters.length === 0 ? (
        <div style={{ height: "100vh" }}>
          <h1
            style={{
              color: "white",
              fontFamily: "Braah One, sans-serif",
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "50px",
            }}
          >
            Agrega una nueva tarjeta ⬆
          </h1>
        </div>
      ) : (
        <Tarjetas>
          {characters.map((char) => {
            return (
              <Card
                id={char.id}
                key={char.id}
                name={char.name}
                status={char.status}
                species={char.species}
                gender={char.gender}
                origin={char.origin.name}
                image={char.image}
                onClose={onClose}
              />
            );
          })}
        </Tarjetas>
      )}
    </div>
  );
}
