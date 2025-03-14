import { useEvn } from "../context/EventContext";

function SignUp() {
  const {
    handleLoginRegisterToggle,
    handleChange,
    handleRegister,
    user,
    error,
  } = useEvn();

  return (
    <div className="border-2 border-[#ff9696] w-[70%] mx-auto rounded-md p-3
     flex items-center flex-col shadow-lg">
      <h2 className="text-2xl font-semibold mb-5">Sign Up</h2>
      <form onSubmit={handleRegister}>
        <div className="flex items-center my-4">
          <label className="block text-sm font-medium mb-1">Username: </label>
          <input
            type="text"
            placeholder="enter username"
            name="username"
            value={user.username || ""}
            onChange={handleChange}
            className="p-2 rounded-md bg-[#fcebda] border-2 border-[#ff9696] shadow-md ml-3 text-[#a60000]"
          />
        </div>
        <div className="flex items-center my-4">
          <label className="block text-sm font-medium mr-7">Email: </label>
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            value={user.email || ""}
            onChange={handleChange}
            className="p-2 rounded-md bg-[#fcebda] border-2 border-[#ff9696] shadow-md ml-3 text-[#a60000]"
          />
        </div>
        <div className="flex items-center my-4">
          <label className="block text-sm font-medium mr-0.5">Password: </label>
          <input
            type="password"
            placeholder="enter password"
            name="password"
            value={user.password || ""}
            onChange={handleChange}
            className="p-2 rounded-md bg-[#fcebda] border-2 border-[#ff9696] shadow-md ml-3 text-[#a60000]"
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm mb-4">
            <p>{error}</p>
          </div>
        )}

        <button
          type="submit"
          className="cursor-pointer rounded-md m-4 px-[7px] pb-[4px] pt-[2px] bg-[#ff2424] text-[#ffead7] border-2 border-[#ff2424]
           hover:bg-[#ffead7] hover:border-[#ff2424] hover:text-[#ff2424] transition-all duration-300 ease-in"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <button
          onClick={handleLoginRegisterToggle}
          className="text-[#ff2424] underline cursor-pointer"
        >
          Login
        </button>
      </p>
    </div>
  );
}

export default SignUp;
