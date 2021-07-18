import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert("ボタンが押されました。");
  };

  return (
    <>
      <h1 style={{ color: "red", margin: "16px" }}>Hello World!</h1>
      <ColorfulMessage color="red" message="I'm Tomohiro!" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
