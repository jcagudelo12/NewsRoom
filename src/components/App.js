import React from "react";
import Search from "../containers/Search";
import Repos from "../containers/Repos";

const App = () => (
  <div className="container-fluid p-0 m-0">
    <div className="p-0 m-0">
      <Search />
      <Repos />
    </div>
  </div>
);

export default App;
