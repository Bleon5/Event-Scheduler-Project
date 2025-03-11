import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainTemplate from "./layout/MainTemplate";
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainTemplate />}>
            <Route index element={<Home />} />
            <Route path="createEvent" element={<CreateEvent />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
