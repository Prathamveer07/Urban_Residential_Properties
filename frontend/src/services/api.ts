import axios from "axios";
import { Property, PropertyResponse } from "../types/property";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const login = async (email: string, password: string) => {
  const response = await api.post(
    "/auth/login",
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const register = async (email: string, password: string) => {
  const response = await api.post(
    "/auth/signup",
    { email, password, name: "Test" },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const getProperties = async (): Promise<PropertyResponse[]> => {
  const response = await api.get("/properties/all-listings", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return response.data;
};

export const addProperty = async (
  property: Property
): Promise<PropertyResponse> => {
  const response = await api.post(
    "/properties/add-property-listing",
    property,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  );
  return response.data;
};
