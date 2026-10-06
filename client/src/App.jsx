import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router";
import HowItWorks from "./pages/HowItWorks.jsx";
import Response from "./pages/Response.jsx";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/response" element={<Response />} />
      </Routes>
    </>
  );
}

export default App;
