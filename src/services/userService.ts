import api from "./api";
import type { User } from "../types/User";

// Fetch all users
export const getUsers = async (): Promise<User[]> => {
  const response = await api.get("/users");
  return response.data;
};

// Fetch a single user by id
export const getUserById = async (id: number): Promise<User> => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

// Create a new user (simulated with JSONPlaceholder)
export const createUser = async (user: User): Promise<User> => {
  const response = await api.post("/users", user);
  return response.data;
};

// Update an existing user (simulated with JSONPlaceholder)
export const updateUser = async (id: number, user: User): Promise<User> => {
  const response = await api.put(`/users/${id}`, user);
  return response.data;
};

// Delete a user (simulated with JSONPlaceholder)
export const deleteUser = async (id: number): Promise<void> => {
  await api.delete(`/users/${id}`);
};