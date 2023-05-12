import style from "styled-components";

export const Tituloh1 = style.h1`
font-family: 'Braah One', sans-serif;
text-shadow: 2px 2px rgb(3, 201, 136);
`;

export const Cuerpo = style.div`
    background-color: #394867;
    width: 100vw;
    margin: 0;
    padding: 0;
    `;
export const Tarjeta = style.div`
    background-color: rgb(3, 201, 136);
    padding: 10px;
    margin: 2px;
    max-hight: 400px;
    max-width: 300px;
    border-radius: 15px;
    font-family: 'Braah One', sans-serif;
    border: 2px solid #F5F3C1;
`;

export const Tarjetas = style.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Boton = style.button`
    min-width: 130px;
    height: 40px;
    color: black;
    padding: 5px 10px;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    border-radius: 20px;
    border: 2px solid #F5F3C1;
    background: #F5F3C1;
    text-decoration: none;
  
  &:hover {
    background: #fff;
  }
`;

export const NavBar = style.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: baseline;
  background-color: #F5F3C1;
  border-bottom: 2px solid black;
`;

export const Agregar = style.button`
    font-family: 'Braah One', sans-serif;
    min-width: 130px;
    height: 40px;
    color: rgb(33, 42, 62);
    padding: 10px 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    overflow: hidden;
    border-radius: 5px;
    border: none;
    background-color: rgb(3, 201, 136);
    margin: 5px;
  
  :hover{
    border-radius: 5px;
    padding-right: 24px;
    padding-left:8px;
  }
  :hover:after{
    opacity: 1;
    right: 10px;
  }
  :after{
    content: "+";
    position: absolute;
    opacity: 0;
    font-size: 20px;
    line-height: 40px;
    top: 0;
    right: -20px;
    transition: 0.4s;
  }
`;

export const Input = style.input`
  border: 2px solid black;
  padding: 3px;
  max-width: 100px;
`;

export const Name = style.h1`
  background-color: rgb(219, 223, 234);
  text-shadow: 2px 2px rgb(3, 201, 136);
  color: black;
  text-decoration: none;
`;

export const NavButtons = style.div`
display: flex;
color: black;
text-decoration: none;
`;

export const NavBut = style.button`
background-color: rgb(3, 201, 136);
border: 1px solid black;
border-radius: 15px;
font-family: 'Braah One', sans-serif;
height: 40px;
padding: 5px 10px;
font-weight: 800;
cursor: pointer;
outline: none;
border-radius: 20px;
margin-left: 15px;
box-shadow: 2px 2px black;
`;

export const TarjetasDetail = style.div`
display: flex;
justify-content: center;
margin: 20px;
padding 10px;
align-items: stretch;
height: 100vh;
align-items: center;
`;

export const Detalles = style.div`
background-color: #F5F3C1;
font-family: 'Braah One', sans-serif;
padding: 30px;
border: 2px solid black;
height: 40vh;
`;

export const ImagenDetail = style.img`
border-radius: 50%;
border: 2px solid #F5F3C1;
`;

export const BotonRandom = style.button`
border: 1px solid black;
background-color: rgb(3, 201, 136);
cursor: pointer;
border-radius: 20px;
max-height: 30px;
max-width: 50px;
margin-right: 2px;
`;

export const NavButtonsSearch = style.div`
display: flex;
color: black;
text-decoration: none;
flex-direction: column;
`;

export const LoginForm = style.div`
margin-top: 50px;
margin-bottom: 50px;
position: relative;
width: 400px;
padding: 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: black;
color: white;
font-family: 'Braah One', sans-serif;
border-radius: 25px;
border: 1px solid #F5F3C1;
`;

export const FormData = style.form`
display: flex;
flex-direction: column;
`;
export const ImgForm = style.img`
border-radius: 50%;
width: 250px;
height: 250px;
margin-bottom: 30px;
`;

export const DetallesImg = style.div`
border: 2px solid #F5F3C1;
border-left: 0px;
padding: 20px;
background-color: black;
`;
export const BotonSubmit = style.button`
font-family: 'Braah One', sans-serif;
min-width: 130px;
height: 40px;
color: rgb(33, 42, 62);
padding: 10px 10px;
font-weight: bold;
cursor: pointer;
position: relative;
display: inline-block;
outline: none;
overflow: hidden;
border-radius: 5px;
border: none;
background-color: rgb(3, 201, 136);
margin: 15px;
`;

export const AboutDiv = style.div`
height: 100vh;
display: flex;
justify-content: center;
font-family: 'Braah One', sans-serif;
color: white;
`;

export const BotonFavorito = style.button`
background-color: rgb(3, 201, 136); 
border: none;
cursor: pointer;
margin: 4px;
:hover{
  transform: rotateZ(10deg) scale(1.2);
}
`;
