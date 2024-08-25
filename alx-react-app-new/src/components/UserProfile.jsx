import React, { useContext } from "react";
import UserContext from "./components/UserContext";

const UserProfile = () => {
  const user = useContext(UserContext);

  return (
    <div style={{ border: "1px solid grey", padding: "10px", margin: "10px" }}>
      <h2 style={{ color: "blue" }}>{user.name}</h2>
      <p>
        Age: <span style={{ color: "blue" }}>{user.age}</span>
      </p>
      <p>Bio: {user.bio}</p>
    </div>
  );
};

export default UserProfile;
