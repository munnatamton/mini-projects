import React from "react";
import "./style.css";

const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createDate = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
      </div>
      <div className="profile-info">
        <div>
          <p>
            User joined on{" "}
            {`${createDate.getDate()} ${createDate.toLocaleString("en-us", {
              month: "short",
            })} ${createDate.getFullYear()}`}
          </p>
        </div>
        <div>
          <p>Public Repositories</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers </p>
          <p>{followers}</p>
        </div>
        <div>
          <p>following</p>
          <p> {following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
