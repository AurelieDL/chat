import React from "react";

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
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
