import React from "react";

const Header = () => {
  const headerstyle = {
    backgroundColor: "Red",
    color: "black",
  };
  /*Inline styling */
  return (
    <header style={headerstyle}>
      <h1>Welcome Amadis Members</h1>
    </header>
  );
};
export default Header;
