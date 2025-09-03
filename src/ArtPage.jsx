import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

// Import your images
import art1 from "./assets/img/1.jfif";
import art2 from "./assets/img/2.jfif";
import art3 from "./assets/img/3.jfif";
import art4 from "./assets/img/4.jfif";
import art5 from "./assets/img/5.jfif";
import art6 from "./assets/img/6.jfif";
import art7 from "./assets/img/7.jfif";
import art8 from "./assets/img/8.jfif";
import art9 from "./assets/img/9.jfif";
import art10 from "./assets/img/10.jfif";
import art11 from "./assets/img/11.jfif";
import art12 from "./assets/img/12.jfif";
import art13 from "./assets/img/13.jfif";
import art14 from "./assets/img/14.jfif";
const artworks = [art1, art2, art3, art4, art5, art6, art7, art8, art9, art10, art11, art12, art13, art14];

export default function ArtPage() {
  const [art, setArt] = useState("");

  const getArtwork = () => {
    const randomArt = artworks[Math.floor(Math.random() * artworks.length)];
    setArt(randomArt);
  };

  return (
    <div className="app">
         <p className="footer">To my Dearest: Zee 🌷</p>
      <h1 className="title">🎨 Gallery for you, my dearest! </h1>
      <button onClick={getArtwork} className="btn">
        Show Random Artwork
      </button>

        

      {art && (
        <div className="art-container">
          <img src={art} alt="Random Artwork" className="art-img" />
        </div>
      )}

 <Link to="/" className="back-btn">
        ⬅ Back to Home
      </Link>
      <p className="footer">Created by: Raf ✨</p>
    </div>
  );
}
