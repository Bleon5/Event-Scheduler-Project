import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EventContext = createContext();

const useEvn = () => useContext(EventContext);

const EvnProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (token && storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  const handleChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const userExists = users.some((u) => u.email === user.email);
    if (userExists) {
      setError("User with this email already exists!");
      return;
    }

    if (user.password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }

    const newUser = {
      email: user.email,
      password: user.password,
      username: user.username,
      id: Date.now(),
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setUser({ username: "", email: "", password: "" });

    navigate("/signin");
  };

  const handleLoginRegisterToggle = () => {
    const currentPath = window.location.pathname;
    navigate(currentPath === "/signin" ? "/register" : "/signin");
  };

  // Sign in an existing user
  const handleSignIn = (formData) => {
    setError("");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );
    if (!foundUser) {
      setError("Invalid email or password!");
      return false;
    }
    
    // Create a simple token (in production, use a more secure method) 
    const token = btoa(foundUser.email + ":" + Date.now());
    localStorage.setItem("token", token);
    localStorage.setItem("users", JSON.stringify(foundUser));
    setUsers(foundUser);
    navigate("/");
    return true;
  };

  // Sign out current user
  const handleSignout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("users");
    setUsers("");
    navigate("/signin");
  }

  return (
    <EventContext.Provider
      value={{
        handleLoginRegisterToggle,
        handleChange,
        handleRegister,
        handleSignIn,
        handleSignout,
        user,
        users,
        error,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export { useEvn, EvnProvider };
