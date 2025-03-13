import { createContext, useContext, useState } from "react";
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

    setUsers([...users, newUser]);

    setUser({ username: "", email: "", password: "" });

    localStorage.setItem("user", JSON.stringify(newUser));
    navigate("/login");
  };
  const handleLoginRegisterToggle = () => {
    const currentPath = window.location.pathname;
    navigate(currentPath === "/login" ? "/register" : "/login");
  };

  return (
    <EventContext.Provider
      value={{
        handleLoginRegisterToggle,
        handleChange,
        handleRegister,
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
