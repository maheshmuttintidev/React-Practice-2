import React from "react";

export const Dashboard = ({ username, password }) => {
  return (
    <>
      <h1>User Details</h1>
      <p>{username}</p>
      <p>{password}</p>
    </>
  );
};
