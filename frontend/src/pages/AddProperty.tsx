import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { addProperty } from "../services/api";
import Navbar from "../components/Navbar";

const AddProperty = () => {
  const navigate = useNavigate();
  const [property, setProperty] = useState({
    name: "",
    location: "",
    price: "",
    photo: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!property.photo) {
      setError("Please provide a photo URL");
      return;
    }

    try {
      await addProperty({
        ...property,
        price: property.price,
      } as any);
      navigate("/");
    } catch (err) {
      setError("Failed to add property");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Add New Property
          </h1>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Property Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={property.name}
                onChange={(e) =>
                  setProperty({ ...property, name: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                id="location"
                type="text"
                required
                value={property.location}
                onChange={(e) =>
                  setProperty({ ...property, location: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                id="price"
                type="number"
                required
                value={property.price}
                onChange={(e) =>
                  setProperty({ ...property, price: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo URL
              </label>
              <input
                id="photo"
                type="url"
                required
                value={property.photo}
                onChange={(e) =>
                  setProperty({ ...property, photo: e.target.value })
                }
                placeholder="https://example.com/property-image.jpg"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center space-x-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus className="h-5 w-5" />
              <span>Add Property</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
