import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import "./App.css";
import Home from "./pages/Home"; // Assuming you have a Home component
import About from "./pages/About"; // Assuming you have an About component
import Work from "./pages/Work"; // Assuming you have a Work component
import "@radix-ui/themes/styles.css";
function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
     
    </Router>
  );
}

export default App;
