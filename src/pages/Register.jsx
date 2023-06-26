import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Ceci est un Chat!</span>
        <span className="title">S'enregistrer</span>
        <form>
          <input type="text" placeholder="pseudo"></input>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="mot de passe"></input>
          <input style={{ display: "none" }} type="file" id="file/"></input>
          <label htmlFor="file">
            <img src={Add} alt=""></img>
            <span>Ajouter un avatar</span>
          </label>
          <button>S'enregistrer</button>
        </form>
        <p>Vous avez déjà un compte? Se connecter</p>
      </div>
    </div>
  );
};

export default Register;
