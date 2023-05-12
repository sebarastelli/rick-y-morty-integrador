import { AboutDiv } from "../style/styledcomponents";

export default function About() {
  return (
    <AboutDiv>
      <img
        style={{ width: "100vw" }}
        src="https://www.xtrafondos.com/wallpapers/diseno-de-paisaje-del-espacio-5771.jpg"
        alt="asd"
      />
      <h1
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Aplicación de Rick y Morty desarrollada en el bootcampo SoyHenry
      </h1>
    </AboutDiv>
  );
}
