import React from "react";
import Img from "../img/addPhoto.png";
import Attach from "../img/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="... Les blablas ici" />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Envoyer</button>
      </div>
    </div>
  );
};

export default Input;
