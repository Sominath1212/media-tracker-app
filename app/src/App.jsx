import React, { useState } from "react";
import AddMedias from "./Components/AddMedias";

import List from "./Components/List";

function App() {
  const [selecetedMenu, setSelectedMenu] = useState("list");
 
  return (
    <div className="flex">
      {/* left */}
      <div className="flex flex-col shadow-2xl items-center  w-[20%] h-screen py-10">
        <button
          className="bg-purple-500  border border-purple-500 hover:bg-none rounded-2xl px-4 py-2 my-10 "
          value={"list"}
          onClick={() => setSelectedMenu("list")}
        >
          Media List
        </button>
        <button
          value={"add"}
          onClick={() => setSelectedMenu("add")}
          className="bg-purple-500  border border-purple-500 hover:bg-none rounded-2xl px-4 py-2 my-10 "
        >
          Add Media
        </button>
      </div>
      {/* right */}
      <div className=" w-[70%] p-10 h-screen">
        {selecetedMenu == "list" ? <List /> : <AddMedias />}
      </div>
    </div>
  );
}

export default App;
