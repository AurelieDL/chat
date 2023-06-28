import React from "react";
import { signOut } from "firebase/auth";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Super Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/573267/pexels-photo-573267.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
        <span>Aurélie</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
