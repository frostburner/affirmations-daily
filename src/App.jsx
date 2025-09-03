import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import AffirmationsPage from "./AffirmationsPage";
import ArtPage from "./ArtPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/affirmations" element={<AffirmationsPage />} />
        <Route path="/art" element={<ArtPage />} />
      </Routes>
    </Router>
  );
}
