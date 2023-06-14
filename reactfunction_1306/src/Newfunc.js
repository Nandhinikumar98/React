import React from "react";

const Newfunc = () => {
  /*Arrow function -- function for chnaging bg*/
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

export default Newfunc;
