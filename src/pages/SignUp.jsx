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
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-md">
      <h2 className="text-2xl font-semibold mb-5">Sign Up</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={user.username || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={user.email || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={user.password || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm mb-4">
            <p>{error}</p>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md cursor-pointer hover:bg-white hover:text-blue-500 transition-all duration-300 ease-in"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <button
          onClick={handleLoginRegisterToggle}
          className="text-blue-500 underline"
        >
          Login
        </button>
      </p>
    </div>
  );
}

export default SignUp;
