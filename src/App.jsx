import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EvnProvider } from "./context/EventContext"; // Importo contextin
import MainTemplate from "./layout/MainTemplate";
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <EvnProvider>
        <Routes>
          <Route path="/" element={<MainTemplate />}>
            <Route index element={<Home />} />
            <Route path="createEvent" element={<CreateEvent />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      </EvnProvider>
    </Router>
  );
}

export default App;
