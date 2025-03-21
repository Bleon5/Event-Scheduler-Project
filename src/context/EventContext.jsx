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
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("");
  const [event, setEvent] = useState([]);
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const storedEvents = JSON.parse(localStorage.getItem("event")) || [];
    const storedCurrentUser = JSON.parse(localStorage.getItem("currentUser"));
    setEvent(storedEvents);
    console.log("Stored Events:", storedEvents);
    if (getToken && storedUsers) {
      setUsers(storedUsers);
      setCurrentUser(storedCurrentUser);
      setIsLoggedIn(true);
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
      setIsLoggedIn(false);
      return;
    }

    // Create a simple token (in production, use a more secure method)
    const newToken = btoa(foundUser.email + ":" + Date.now());
    setToken(newToken);

    localStorage.setItem("token", newToken);
    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    setUsers(foundUser);
    setIsLoggedIn(true);
    navigate("/");
  };

  const handleDelete = (id) => {
    const filteredEvents = event.filter((ev) => ev.id !== id);
    setEvent(filteredEvents);
    localStorage.setItem("event", JSON.stringify(filteredEvents));
  };

  return (
    <EventContext.Provider
      value={{
        handleLoginRegisterToggle,
        handleChange,
        handleRegister,
        handleSignIn,
        user,
        users,
        currentUser,
        error,
        event,
        token,
        isLoggedIn,
        setEvent,
        handleDelete,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export { useEvn, EvnProvider };
