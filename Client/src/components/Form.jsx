import { useState } from "react";
import {
  LoginForm,
  FormData,
  ImgForm,
  BotonSubmit,
} from "../style/styledcomponents";
import validation from "../asset/validacion";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    setErrors(validation({ ...userData, [property]: value }));
  };

  const submitHandler = (event) => {
    
    event.preventDefault();
    login(userData);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <LoginForm>
        <ImgForm
          src="https://media.vandalsports.com/i/640x360/5-2022/202251816546_1.jpg"
          alt="loginimg"
        />
        <FormData onSubmit={submitHandler}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "yellow" }}> {errors.email} </p>}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.pass && <p style={{ color: "yellow" }}> {errors.pass} </p>}
          <BotonSubmit type="submit">Submit</BotonSubmit>
        </FormData>
      </LoginForm>
    </div>
  );
}
