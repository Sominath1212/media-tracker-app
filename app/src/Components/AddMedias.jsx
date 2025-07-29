import React, { useState } from "react";
import { Button, Form, Input, Select, Space, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
function AddMedias() {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "labourimages");
    data.append("cloud_name", "dzcz9gnvd");
    const res = await fetch(
     import.meta.env.VITE_CLOUNDANARY_URL,
      {
        method: "POST",
        body: data,
      }
    );

    const uploadurlimage = await res.json();
    setFile(uploadurlimage.url);

    setPreview(uploadurlimage.url);
  };

  //submit data

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(file, title, director, budget, location, duration, year, type);
  };
  return (
    <div className="text-center max-h-[79vh]">
      <h2>Add Media</h2>
      <form
        className="text-start flex flex-col gap-5 shadow-2xl p-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center mb-4">
          {preview ? (
            <img
              src={preview}
              alt="Profile Preview"
              className="w-24 h-24 rounded object-cover border"
            />
          ) : (
            <div className="w-24 h-24 rounded bg-gray-200 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2 ml-20 hover:text-purple-500 cursor-pointer"
          />
        </div>
        <div className="text-start flex flex-col">
          <label htmlFor="title" className="text-xl font-bold">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Put the title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="px-4 py-2 outline-none border border-purple-500 w-fullm-2 rounded"
          />
        </div>
        <div className="text-start flex flex-col">
          <label htmlFor="director" className="text-xl font-bold">
            Director
          </label>
          <input
            value={director}
            onChange={(e) => {
              setDirector(e.target.value);
            }}
            type="text"
            name="director"
            placeholder="Director Name"
            className="px-4 py-2 outline-none border border-purple-500 w-fullm-2 rounded"
          />
        </div>
        <div className="text-start flex flex-col">
          <label htmlFor="type" className="text-xl font-bold">
            Type
          </label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
            className="px-4 py-2 outline-none border border-purple-500 w-fullm-2 rounded"
          >
            <option value="">Select Type</option>
            <option value="tv show">TV Show</option>
            <option value="movie">Movie</option>
          </select>
        </div>
        <div className="text-start flex flex-col">
          <label htmlFor="budget" className="text-xl font-bold">
            Budget
          </label>
          <input
            value={budget}
            onChange={(e) => {
              setBudget(e.target.value);
            }}
            type="text"
            name="budget"
            placeholder="Budget "
            className="px-4 py-2 outline-none border border-purple-500 w-fullm-2 rounded"
          />
        </div>
        <div className="text-start flex flex-col">
          <label htmlFor="location" className="text-xl font-bold">
            Location
          </label>
          <input
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            type="text"
            name="location"
            placeholder="Location "
            className="px-4 py-2 outline-none border border-purple-500 w-fullm-2 rounded"
          />
        </div>
        <div className="text-start flex flex-col">
          <label htmlFor="duration" className="text-xl font-bold">
            Duration
          </label>
          <input
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
            }}
            type="text"
            name="duration"
            placeholder="Duration "
            className="px-4 py-2 outline-none border border-purple-500 w-fullm-2 rounded"
          />
        </div>
        <div className="text-start flex flex-col">
          <label htmlFor="year" className="text-xl font-bold">
            Year
          </label>
          <input
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
            type="datetime-local"
            name="year"
            placeholder="year "
            className="px-4 py-2 outline-none border border-purple-500 w-fullm-2 rounded"
          />
        </div>
        <button className="bg-purple-500 py-3 px-2 rounded hover:bg-purple-600 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddMedias;
