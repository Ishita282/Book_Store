// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/auth/signup",
//         formData
//       );
//       setSuccess(response.data.message);
//       setError(null);
//       setTimeout(() => {
//         navigate("/dashboard");
//       }, 2000);
//     } catch (error) {
//       setError(error.response?.data?.message || "Something went wrong");
//       setSuccess(null);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bd-white rounded-lg shadow-lg p-8">
//         <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
//           Signup
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="password"
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
//           >
//             SignUp
//           </button>
//         </form>
//         {error && <p className="text-red-500 text-center mt-4">{error}</p>}
//         {success && (
//           <p className="text-green-500 text-center mt-4">{success}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Signup;
