import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const logout = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { handleLogout } = useAuth();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    handleLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <h2>You have been logged out</h2>;
};

export default logout;
