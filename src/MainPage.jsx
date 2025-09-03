import { Link } from "react-router-dom";
import "./App.css";

export default function MainPage() {
  return (
    <div className="app">
         <p className="footer">To my Dearest: Zee 🌷</p>
      <h1 className="title">Welcome 🌸</h1>
      <p className="subtitle">Choose something made just for you 💖</p>

      <div className="menu-buttons">
        <Link to="/affirmations" className="btn">💌 Daily Affirmations</Link>
        <Link to="/art" className="btn">🎨 MS Paint Artwork</Link>
      </div>

      <p className="footer">Created by: Raf ✨</p>
    </div>
  );
}
