import React from "react";

const Content = () => {
  /*Function using random display */
  function changeName() {
    const names = ["Nandy", "Dony", "Vimal"];
    const n = Math.floor(Math.random() * 3);
    return names[n];
  }
  /*click event program*/
  const clickevent = () => {
    console.log("Thanks for loging");
  };

  /*giving click event process in anonymous function*/
  const clickevent2 = (name) => {
    console.log(`Thank you ${name}!!!`);
  };

  /*function for chnaging bg in 2nd ways*/
  return (
    <main>
      <p style={{ backgroundColor: "blueviolet", color: "white" }}>
        Complete the assigned task, {changeName()}
      </p>
      <button onClick={clickevent}> Login</button>
      {/* <button onClick={clickevent2()}>Submit</button> -- if we pass arg in function, 
      before we click submit btn it will automatically load the cliekevent2 function 
      so inorder to proceed by passing arg we use anonymous fns*/}
      <button onClick={() => clickevent2("Nandhini")}> Submit</button>
    </main>
  );
};

export default Content;
