import React, { useState, useEffect } from "react";
import Login from "./components/Login.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [user, setUser] = React.useState("");
  if (!user) return <Login setUser={setUser} />;

  React.useEffect(() => {}, [user]);
  return (
    <>
      <Header user={user} setUser={setUser} />
    </>
  );
}

export default App;
