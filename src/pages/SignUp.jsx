import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setError("Please fill all required fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));

    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-md">
      <h2 className="text-2xl font-semibold mb-5">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        {error && <div className="text-red-500 mb-5">{error}</div>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md cursor-pointer hover:bg-white hover:text-blue-500 transition-all duration-300 ease-in"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
