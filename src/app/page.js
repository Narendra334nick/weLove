"use client"
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [position, setPosition] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseMove = () => {
    // Using viewport units (vw/vh) instead of pixels
    // Subtracting 20vh/vw to ensure button stays within bounds
    const newX = Math.random() * 80; // 0 to 80vw
    const newY = Math.random() * 80; // 0 to 80vh
    setPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    setShowPopup(true);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Do you love me?
        </h1>
        
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${styles.yesButton}`}
            onClick={handleYesClick}
          >
            Yes
          </button>

          <button
            className={`${styles.button} ${styles.noButton}`}
            style={position ? { 
              position: 'absolute', 
              left: `${position.x}vw`, 
              top: `${position.y}vh` 
            } : {}}
            onMouseOver={handleMouseMove}
            onClick={handleMouseMove}
          >
            No No
          </button>
        </div>

        {showPopup && (
          <div className={styles.popup}>
            <h2 className={styles.popupTitle}>
              Congratulations! You are in love with Narendra ❤️
            </h2>
            <button
              className={`${styles.button} ${styles.closeButton}`}
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
