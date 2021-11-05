import React, { useState } from "react";
import Login from "./components/Login.jsx";

function App() {
  const [user, setUser] = React.useState("");
  if (!user) {
    return <Login setUser={setUser} />;
  }
  return <div className="App"> App</div>;
}

export default App;
