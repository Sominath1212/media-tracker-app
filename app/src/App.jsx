import React, { useState } from "react";
import AddMedias from "./Components/AddMedias";
import { Toaster } from "react-hot-toast";
import List from "./Components/List";
import UpdateForm from "./Components/UpdateForm";

function App() {
  const [selecetedMenu, setSelectedMenu] = useState("add");
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div className="flex h-screen">
      {/* left */}
      <div className="flex flex-col shadow-2xl items-center  w-[20%] h-full py-10 ">
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
        {selecetedMenu == "list" ? (
          <List
            setSelectedMenu={setSelectedMenu}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        ) : selecetedMenu == "add" ? (
          <AddMedias />
        ) : (
          <UpdateForm selectedItem={selectedItem} />
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default App;
