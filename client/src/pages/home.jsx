import "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div>
      <h1>Welcom to the Book Store</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <br />
      <br />
      <Link to="/Signup">
        <button>Signup</button>
      </Link>
    </div>
  );
};

export default home;
