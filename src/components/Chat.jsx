import React from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Ken</span>
        <div className="chatIcons">
          <img src={Cam} alt=""></img>
          <img src={Add} alt=""></img>
          <img src={More} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Chat;
