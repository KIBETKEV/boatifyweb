import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Boats from "./pages/Boats";
import BoatCategories from "./components/BoatCategories";
import Footer from "./components/Footer";
import ListBoat from "./pages/ListBoat";
import BoatDetails from "./pages/BoatDetails";

function App() {
  return (
    <Router>
      <Navbar />
      
      <div style={{ paddingTop: "75px" }}>
        <ConditionalComponents />
        <Routes>
          <Route path="/" element={<Boats />} />
          <Route path="/boats" element={<Boats />} />
          <Route path="/boat/:id" element={<BoatDetails />} />
          <Route path="/list-boat" element={<ListBoat />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Hide BoatCategories & SearchBar on ListBoat Page
function ConditionalComponents() {
  const location = useLocation();
  return location.pathname === "/list-boat" ? null : (
    <>
      <BoatCategories />
      <SearchBar />
    </>
  );
}

export default App;