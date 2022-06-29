import React from "react";
import User from "./User";

const Users = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <User user={user} />
      ))}
    </>
  );
};
export default Users;
