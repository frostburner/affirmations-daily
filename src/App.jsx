import { useState } from "react";
import "./App.css";

const affirmations = [
  "Every day with you feels like the best chapter of my story. 📖❤️",
  "You are the reason ordinary moments feel extraordinary. ✨",
  "Your smile has a way of making the world softer and brighter. 🌸",
  "No matter how hard the day gets, remember you are deeply loved. 💖",
  "You are stronger, braver, and more beautiful than you realize. 🌟",
  "I feel lucky just knowing someone as amazing as you exists. 🍀",
  "You deserve peace, joy, and all the gentle things in life. 🌼",
  "Every step you take leaves the world a little better than it was. 🌍",
];

const backgrounds = [
  "linear-gradient(135deg, #ffe4ec, #ffd6f6)",
  "linear-gradient(135deg, #c3ecf7, #a1c4fd)",
  "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
  "linear-gradient(135deg, #fad0c4, #ffd1ff)",
  "linear-gradient(135deg, #ffecd2, #fcb69f)",
  "linear-gradient(135deg, #d4fc79, #96e6a1)",
  "linear-gradient(135deg, #84fab0, #8fd3f4)",
];

export default function App() {
  const [message, setMessage] = useState("");
  const [fade, setFade] = useState(false);
  const [background, setBackground] = useState(backgrounds[0]);

  const getAffirmation = () => {
    setFade(true);

    setTimeout(() => {
      // pick random affirmation
      const randomAffirmation =
        affirmations[Math.floor(Math.random() * affirmations.length)];
      setMessage(randomAffirmation);

      // pick random background
      const randomBackground =
        backgrounds[Math.floor(Math.random() * backgrounds.length)];
      setBackground(randomBackground);

      setFade(false);
    }, 300);
  };

  return (
    <div
      className="app"
      style={{ background, transition: "background 1s ease" }}
    >
      <h1 className="title">Daily Affirmation for You 💕</h1>
      <button onClick={getAffirmation} className="btn">
        Get Affirmation
      </button>
      {message && (
        <p className={`message ${fade ? "fade-out" : "fade-in"}`}>{message}</p>
      )}
    </div>
  );
}
