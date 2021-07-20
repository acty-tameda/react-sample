import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const [num, setNum] = useState(0);

  return (
    <>
      <h1 style={{ color: "red", margin: "16px" }}>Hello World!</h1>
      <ColorfulMessage color="red" message="I'm Tomohiro!" />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
