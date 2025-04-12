// src/api/catFactsApi.ts

// Importing Axios and AxiosError for making HTTP requests and handling errors
import axios, { AxiosError } from "axios";

// Creating an instance of Axios with a base URL pointing to the cat facts API
const api = axios.create({
  baseURL: "https://catfact.ninja", // All requests will be made relative to this base URL
});

// Asynchronous function to fetch cat facts from a specific page (defaults to page 1)
export const getFacts = async (page: number = 1) => {
  try {
    // Makes a GET request to /facts endpoint with the page query parameter
    const response = await api.get(`/facts?page=${page}`);

    // Returns the data from the API response
    return response.data;
  } catch (error) {
    // Logs the error in the console for debugging
    console.error("Error fetching facts:", error);

    // Throws the error again so it can be caught by the calling code (e.g., rejected in a try/catch)
    throw error;
  }
};
