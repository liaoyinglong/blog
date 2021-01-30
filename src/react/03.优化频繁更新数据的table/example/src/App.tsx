import React, { useEffect, useState } from "react";
import { message } from "antd";
import { Item } from "./shared/fakerData";

function App() {
  useEffect(() => {
    console.log(new Item());
  }, []);

  return <div className="App"></div>;
}

export default App;
