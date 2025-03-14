import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EvnProvider } from "./context/EventContext"; // Importo contextin
import MainTemplate from "./layout/MainTemplate";
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";
import EventDetail from "./pages/EventDetail";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <EvnProvider>
        <Routes>
          <Route path="/" element={<MainTemplate />}>
            <Route index element={<Home />} />
            <Route path="createEvent" element={<CreateEvent />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
        </Routes>
      </EvnProvider>
    </Router>
  );
}

export default App;
