// App.js
import React, { useEffect, useRef } from 'react';
import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const navbarRef = useRef(null);
  const buttonRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -100,
      duration: 3,
      ease: "power4.out",
    });

    gsap.from(buttonRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 5,
      ease: "elastic.out(1, 0.3)",
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 80%", // Adjust the start position of the animation
        end: "bottom 30%",
      },
    });

    gsap.from(footerRef.current, {
      opacity: 0,
      y: 100,
      duration: 5,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <nav ref={navbarRef} className="navbar">
        <div className="logo">CICADA</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/About">About</a></li>
        </ul>
      </nav>

      {/* Main Section */}
      <div className="hero">
        <div ref={buttonRef} className="center-content">
          <h1>tathva'24 presents 'CICADA' is here!!</h1>
          <button className="start-button">Start Now</button>
        </div>
      </div>

    </div>
  );
}

export default App;