import "react";
import useAuth from "../hooks/useAuth";

const dashboard = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user } = useAuth();

  if (!user) return <p>Please login to access the dashboard</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.name}</p>
    </div>
  );
};

export default dashboard;
