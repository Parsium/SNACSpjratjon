import React from "react";
import SnackList from "./Components/SnackList";
import Footer from "./Components/Footer";
import Control from "./Components/Control";

function App() {
  return (
    <div className="App">
      <Control />;
      <SnackList />
      <Footer />
    </div>
  );
}

export default App;
