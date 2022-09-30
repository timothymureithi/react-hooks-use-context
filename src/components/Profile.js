import React, { useContext } from "react";
import Interests from "./Interests";
import { UserContext } from "../context/user";

//remove user prop
function Profile() {
  const { user } = useContext(UserContext);
 // const user = useContext(UserContext);
  // console.log(user);
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} />
    </div>
  );
}

export default Profile;
