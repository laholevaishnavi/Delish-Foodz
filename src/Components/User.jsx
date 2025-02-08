import React from "react";
// functional Component is kind of arrow function that returns some jsx...
const User = ({ name }) => {
  return (
    <>
      <div>Functional Component in React....!!!!</div>
      <h1>{name}</h1>
    </>
  );
};
export default User;
