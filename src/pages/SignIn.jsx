import { useState } from "react";
import { useEvn } from "../context/EventContext";

const SignIn = () => {
  const { handleSignIn, error } = useEvn();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChangeInput = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-5 text-center">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label  className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChangeInput}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your email" 
          />
        </div>
        <div className="mb-4">
          <label  className="block text-sm font-medium mb-1">Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={handleChangeInput}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your password" 
          />
        </div>
        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignIn