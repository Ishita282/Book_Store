// import React, { useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Logout = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const logoutUser = async () => {
//       try {
//         await axios.post(
//           "http://localhost:3000/auth/logout",
//           {},
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         localStorage.removeItem("token");
//         navigate("/home");
//       } catch (error) {
//         console.log("Logout failed: ", error.response?.data || error.message);
//       }
//     };
//     logoutUser();
//   }, []);

//   return <h2>You have been logged out</h2>;
// };

// export default Logout;
