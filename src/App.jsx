import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import MainTemplate from "./layout/MainTemplate";
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainTemplate />}>
            <Route index element={<Home />} />
            <Route path="createEvent" element={<CreateEvent />} />

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
