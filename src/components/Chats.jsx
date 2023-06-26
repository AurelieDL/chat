import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/573267/pexels-photo-573267.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        ></img>
        <div className="userChatInfo">
          <span>Ken</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/573267/pexels-photo-573267.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        ></img>
        <div className="userChatInfo">
          <span>Ken</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
