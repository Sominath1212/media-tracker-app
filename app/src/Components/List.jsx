import React, { useState } from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

function List() {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogType, setDialogType] = useState(""); // "delete" or "update"
  const [selectedItem, setSelectedItem] = useState(null);

  const dataSource = [
    {
      id: 1,
      image:
        "http://res.cloudinary.com/dzcz9gnvd/image/upload/v1753830006/jfdllesdbpbs5wdvtaru.png",
      title: "Inception",
      director: "Christopher Nolan",
      budget: 160000000,
      location: "Los Angeles",
      duration: 148,
      year: 2010,
    },
    {
      id: 2,
      image:
        "http://res.cloudinary.com/dzcz9gnvd/image/upload/v1753830006/jfdllesdbpbs5wdvtaru.png",
      title: "Interstellar",
      director: "Christopher Nolan",
      budget: 165000000,
      location: "Iceland",
      duration: 169,
      year: 2014,
    },
    {
      id: 1,
      image:
        "http://res.cloudinary.com/dzcz9gnvd/image/upload/v1753830006/jfdllesdbpbs5wdvtaru.png",
      title: "Inception",
      director: "Christopher Nolan",
      budget: 160000000,
      location: "Los Angeles",
      duration: 148,
      year: 2010,
    },
    {
      id: 2,
      image:
        "http://res.cloudinary.com/dzcz9gnvd/image/upload/v1753830006/jfdllesdbpbs5wdvtaru.png",
      title: "Interstellar",
      director: "Christopher Nolan",
      budget: 165000000,
      location: "Iceland",
      duration: 169,
      year: 2014,
    },
    {
      id: 1,
      image:
        "http://res.cloudinary.com/dzcz9gnvd/image/upload/v1753830006/jfdllesdbpbs5wdvtaru.png",
      title: "Inception",
      director: "Christopher Nolan",
      budget: 160000000,
      location: "Los Angeles",
      duration: 148,
      year: 2010,
    },
    {
      id: 2,
      image:
        "http://res.cloudinary.com/dzcz9gnvd/image/upload/v1753830006/jfdllesdbpbs5wdvtaru.png",
      title: "Interstellar",
      director: "Christopher Nolan",
      budget: 165000000,
      location: "Iceland",
      duration: 169,
      year: 2014,
    },
    {
      id: 3,
      image:
        "http://res.cloudinary.com/dzcz9gnvd/image/upload/v1753830006/jfdllesdbpbs5wdvtaru.png",
      title: "Avatar",
      director: "James Cameron",
      budget: 237000000,
      location: "New Zealand",
      duration: 162,
      year: 2009,
    },
    {
      id: 4,
      image:
        "http://res.cloudinary.com/dzcz9gnvd/image/upload/v1753830006/jfdllesdbpbs5wdvtaru.png",
      title: "The Matrix",
      director: "Lana Wachowski",
      budget: 63000000,
      location: "Sydney",
      duration: 136,
      year: 1999,
    },
    {
      id: 5,
      image:
        "http://res.cloudinary.com/dzcz9gnvd/image/upload/v1753830006/jfdllesdbpbs5wdvtaru.png",
      title: "Titanic",
      director: "James Cameron",
      budget: 200000000,
      location: "Nova Scotia",
      duration: 195,
      year: 1997,
    },
    {
      id: 6,
      image:
        "http://res.cloudinary.com/dzcz9gnvd/image/upload/v1753830006/jfdllesdbpbs5wdvtaru.png",
      title: "Gladiator",
      director: "Ridley Scott",
      budget: 103000000,
      location: "Malta",
      duration: 155,
      year: 2000,
    },
    {
      id: 7,
      image:
        "http://res.cloudinary.com/dzcz9gnvd/image/upload/v1753830006/jfdllesdbpbs5wdvtaru.png",
      title: "The Dark Knight",
      director: "Christopher Nolan",
      budget: 185000000,
      location: "Chicago",
      duration: 152,
      year: 2008,
    },
    {
      id: 8,
      image:
        "http://res.cloudinary.com/dzcz9gnvd/image/upload/v1753830006/jfdllesdbpbs5wdvtaru.png",
      title: "Avengers: Endgame",
      director: "Anthony Russo",
      budget: 356000000,
      location: "Atlanta",
      duration: 181,
      year: 2019,
    },
    {
      id: 9,
      image:
        "http://res.cloudinary.com/dzcz9gnvd/image/upload/v1753830006/jfdllesdbpbs5wdvtaru.png",
      title: "Jurassic Park",
      director: "Steven Spielberg",
      budget: 63000000,
      location: "Hawaii",
      duration: 127,
      year: 1993,
    },
  ];

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setDialogType("delete");
    setShowDialog(true);
  };

  const handleUpdateClick = (item) => {
    setSelectedItem(item);
    setDialogType("update");
    setShowDialog(true);
  };

  const handleConfirm = () => {
    if (dialogType === "delete") {
      console.log("Deleting:", selectedItem);
    } else if (dialogType === "update") {
      console.log("Updating:", selectedItem);
    }
    setShowDialog(false);
  };

  return (
    <div className=" overflow-hidden max-h-[90vh]">
      <h1 className="text-center font-bold text-4xl mb-4">Media List</h1>
      <div className="max-h-[80vh] overflow-y-auto border border-gray-300 rounded-lg mt-0">
        <table className="table-auto border-collapse border  overflow-y-auto   border-gray-300 w-full text-left">
          <thead className="relative w-[100vw] ">
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Cover</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Director</th>
              <th className="border px-4 py-2">Budget</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Duration</th>
              <th className="border px-4 py-2">Year</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataSource.map((media) => (
              <tr key={media.id}>
                <td className="border px-4 py-2">
                  <img src={media.image} className="w-40 h-40" />
                </td>

                <td className="border px-4 py-2">{media.title}</td>
                <td className="border px-4 py-2">{media.director}</td>
                <td className="border px-4 py-2">
                  ${media.budget.toLocaleString()}
                </td>
                <td className="border px-4 py-2">{media.location}</td>
                <td className="border px-4 py-2">{media.duration} min</td>
                <td className="border px-4 py-2">{media.year}</td>
                <td className="border px-4 py-2flex space-x-3 items-center justify-center">
                  <DeleteFilled
                    onClick={() => handleDeleteClick(media)}
                    className="hover:text-red-500 cursor-pointer"
                  />
                  <EditFilled
                    onClick={() => handleUpdateClick(media)}
                    className="hover:text-blue-500 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Confirmation Dialog */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40  bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {dialogType === "delete" ? "Confirm Deletion" : "Confirm Update"}
            </h2>
            <p className="text-gray-600 mb-6">
              {dialogType === "delete"
                ? `Are you sure you want to delete "${selectedItem.title}"?`
                : `Are you sure you want to update "${selectedItem.title}"?`}
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDialog(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className={`px-4 py-2 text-white rounded-lg hover:opacity-90 ${
                  dialogType === "delete" ? "bg-red-500" : "bg-purple-500"
                }`}
              >
                {dialogType === "delete" ? "Delete" : "Update"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default List;
