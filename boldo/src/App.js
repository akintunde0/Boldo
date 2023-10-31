import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/*" element={<Layout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
