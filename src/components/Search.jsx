import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Recherche"></input>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/573267/pexels-photo-573267.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        ></img>
        <div className="userChatInfo">
          <span>Ken</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
