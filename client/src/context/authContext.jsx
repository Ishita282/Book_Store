import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("authToken") || null);

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const response = await fetchUserProfile();
          setUser(response);
        } catch {
          handleLogout();
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleLogin = (data) => {
    setToken(data.token);
    localStorage.setItem("authToken", data.token);
    setUser(data.user);
  };

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("authToken");
  };

  const fetchUserProfile = async () => {
    //use API logic
    // eslint-disable-next-line no-undef
    return await getUserProfile(token);
  };

  return (
    <AuthContext.Provider value={{ user, token, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
