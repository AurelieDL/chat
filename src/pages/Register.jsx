import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
          });
        }
      );
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
          <input style={{ display: "none" }} type="file" id="file/"></input>
          <label htmlFor="file">
            <img src={Add} alt=""></img>
            <span>Ajouter un avatar</span>
          </label>
          <button>S'enregistrer</button>
          {err && <span>Oops il y a eu un souci</span>}
        </form>
        <p>Vous avez déjà un compte? Se connecter</p>
      </div>
    </div>
  );
};

export default Register;
