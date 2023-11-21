import { useState } from "react";

import "./App.css";
import BasicFormOne from "./components/BasicFormOne";
import BasicFormTwo from "./components/BasicFormTwo";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <BasicFormOne />
      <BasicFormTwo />
    </>
  );
};

export default App;
