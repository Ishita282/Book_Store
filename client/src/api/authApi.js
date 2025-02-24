import api from "./api";

export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/api/auth/login", credentials);
    return response.data;
  } catch (error) {
    console.log("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

export const signupUser = async (userData) => {
  try {
    const response = await api.post("/api/auth/signup", userData);
    return response.data;
  } catch (error) {
    console.log("Signup failed:", error.response?.data || error.message);
    throw error;
  }
};

export const getUserProfile = async (token) => {
  try {
    const response = await api.get("/api/auth/profile");
    return response.data;
  } catch (error) {
    console.log(
      "Failed to fetch profile:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await api.post("/api/auth/logout");

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    return { message: "Logged out successfully" };
  } catch (error) {
    console.log("Logout failded:", error.response?.data || error.message);
    throw error;
  }
};
