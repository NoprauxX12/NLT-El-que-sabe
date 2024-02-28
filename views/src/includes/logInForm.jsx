import React, { useState } from "react";

const FormularioLogIn = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleEmail = (e) =>{
    setEmail(e.target.value);
  };
  const handlePassword =(e)=>{
    setPassword(e.target.value)
  }

  return (
    <div className="form__container" id="formlog">
      <form>
        <fieldset>
          <legend className="log_in">
            <span style={{ color: "#3D00B7" }}>Log </span>
            <span style={{ color: "#55ACEE" }}>In</span>
          </legend>
          <div>
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">
              Dirección de Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ingrese Email"
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
          <div>
            <label htmlFor="exampleInputPassword1" className="form-label mt-4">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Contraseña"
              value={password}
              onChange={handlePassword}
              autoComplete="off"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FormularioLogIn;
