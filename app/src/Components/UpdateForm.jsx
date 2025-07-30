import React, { useState } from "react";
import { Button, Form, Input, Select, Space, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import toast from "react-hot-toast";

function UpdateForm({ selectedItem }) {
  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    director: "",
    budget: "",
    location: "",
    duration: "",
    year: "",
    type: "",
    file: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  //upload images
  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "labourimages");
    data.append("cloud_name", "dzcz9gnvd");
    const res = await fetch(import.meta.env.VITE_CLOUNDANARY_URL, {
      method: "POST",
      body: data,
    });

    const uploadurlimage = await res.json();
    setFormData({ ...formData, file: uploadurlimage.url });

    setPreview(uploadurlimage.url);
    toast.success("Poster uploaded");
  };

  //submit data

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(formData);

    const data = {};
    for (let key in formData) {
      if (formData[key] !== "") {
        data[key] = formData[key];
      }
    }

    // console.log(file, title, director, budget, location, duration, year, type);

    try {
      // Filter out empty or undefined fields before sending
      const filteredData = Object.fromEntries(
        Object.entries(data).map(([key, value]) => [
          key,
          ["budget", "duration", "year"].includes(key) ? Number(value) : value,
        ])
      );

      axios
        .patch(
          `http://localhost:5000/media/update-media/${selectedItem.id}`,
          filteredData
        )
        .then((response) => {
          console.log(response);

          toast.success("Media Updated");
          setFormData({
            title: "",
            director: "",
            budget: "",
            location: "",
            duration: "",
            year: "",
            type: "",
            file: "",
          });
        })
        .catch((error) => {
          console.error(error);
          toast.error("Something went wrong");
          setFormData({
            title: "",
            director: "",
            budget: "",
            location: "",
            duration: "",
            year: "",
            type: "",
            file: "",
          });
        });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="text-center max-h-[79vh]">
      <h2  className="text-center font-bold text-4xl mb-4">Update Media</h2>
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
            value={formData.title}
            onChange={handleChange}
            className="px-4 py-2 outline-none border border-purple-500 w-fullm-2 rounded"
          />
        </div>
        <div className="text-start flex flex-col">
          <label htmlFor="director" className="text-xl font-bold">
            Director
          </label>
          <input
            value={formData.director}
            onChange={handleChange}
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
            value={formData.type}
            onChange={handleChange}
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
            value={formData.budget}
            onChange={handleChange}
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
            value={formData.location}
            onChange={handleChange}
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
            value={formData.duration}
            onChange={handleChange}
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
            value={formData.year}
            onChange={handleChange}
            type="date"
            name="year"
            placeholder="year "
            className="px-4 py-2 outline-none border border-purple-500 w-fullm-2 rounded"
          />
        </div>
        <button className="bg-purple-500 py-3 px-2 rounded hover:bg-purple-600 cursor-pointer">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateForm;
