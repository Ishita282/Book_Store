// eslint-disable-next-line no-unused-vars
import React from "react";
import useAuth from "../hooks/useAuth";

const profile = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user } = useAuth();

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Nmae: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default profile;
