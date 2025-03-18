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
    <div className="border-2 border-[#ff9696] w-[70%] mx-auto rounded-md p-3
     flex items-center flex-col shadow-lg">
      <h2 className="text-2xl font-semibold mb-5">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center my-4">
          <label className="block text-sm font-medium mr-6.5">Email: </label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChangeInput}
            className="p-2 rounded-md bg-[#fcebda] border-2 border-[#ff9696] shadow-md ml-3 text-[#a60000]"
            placeholder="Enter your email" 
          />
        </div>
        <div className="flex items-center my-4">
          <label className="block text-sm font-medium">Password: </label>
          <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={handleChangeInput}
            className="p-2 rounded-md bg-[#fcebda] border-2 border-[#ff9696] shadow-md ml-3 text-[#a60000]"
            placeholder="Enter your password" 
          />
        </div>
        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
        <button
          type="submit"
          className="cursor-pointer rounded-md m-4 px-[7px] pb-[4px] pt-[2px] bg-[#ff2424] text-[#ffead7] border-2 border-[#ff2424]
           hover:bg-[#ffead7] hover:border-[#ff2424] hover:text-[#ff2424] transition-all duration-300 ease-in"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignIn