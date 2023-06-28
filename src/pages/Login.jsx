import React from "react";
import Add from "../img/addAvatar.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Ceci est un Chat!</span>
        <span className="title">S'enregistrer</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="pseudo"></input>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="mot de passe"></input>

          <button>Se connecter</button>
        </form>
        <p>Vous n'avez pas de compte? S'enregistrer</p>
      </div>
    </div>
  );
};

export default Login;
