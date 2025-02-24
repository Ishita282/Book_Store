import React, { useEffect } from "react";

const logout = () => {
  const { handleLogout } = useAuth();
  useEffect(() => {
    // handleLogout();
  }, []);
  return <h2>You have been logged out</h2>;
};

export default logout;
