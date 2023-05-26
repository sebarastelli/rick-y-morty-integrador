import SearchBar from "./SearchBar";
import { NavBar } from "../style/styledcomponents";
import { Tituloh1 } from "../style/styledcomponents";
import { Link, useLocation } from "react-router-dom";
import {
  NavButtonsSearch,
  NavBut,
  NavButtons,
} from "../style/styledcomponents";

export default function Nav({ onSearch, randomCard, logOut }) {
  const location = useLocation();
  if (location.pathname !== "/") {
    return (
      <NavBar>
        <Tituloh1>RyM App</Tituloh1>
        <NavButtons>
          <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
            <NavBut>About</NavBut>
          </Link>
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            <NavBut>Home</NavBut>
          </Link>
          <Link
            to="/favorites"
            style={{ textDecoration: "none", color: "black" }}
          >
            <NavBut>Favoritos</NavBut>
          </Link>
          <NavBut onClick={logOut} style={{ backgroundColor: "red" }}>
            Log-out
          </NavBut>
        </NavButtons>
        <NavButtonsSearch>
          <SearchBar randomCard={randomCard} onSearch={onSearch} />
        </NavButtonsSearch>
      </NavBar>
    );
  }
}
