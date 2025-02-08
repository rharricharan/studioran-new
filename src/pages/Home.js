import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import "./Home.css";
import HomeVideo from "../assets/videos/homeVideo.mp4";
import Navigation from "../components/Navigation.js";

function Home() {
    useEffect(() => {
        let splitText;

        function runSplit() {
        splitText = new SplitType("[stagger-link-text]", {
            types: "words, chars",
        });

        const staggerLinks = document.querySelectorAll(".stagger-link");
        staggerLinks.forEach((link) => {
            const letters = link.querySelectorAll(".stagger-link-text .char");

            link.addEventListener("mouseenter", () => {
            gsap.to(letters, {
                yPercent: -100,
                duration: 0.5,
                ease: "power4.inOut",
                stagger: { each: 0.03, from: "start" },
                overwrite: true,
            });
            });

            link.addEventListener("mouseleave", () => {
            gsap.to(letters, {
                yPercent: 0,
                duration: 0.4,
                ease: "power4.inOut",
                stagger: { each: 0.03, from: "random" },
            });
            });
        });
        }

        runSplit();

        let windowWidth = window.innerWidth;
        const handleResize = () => {
        if (windowWidth !== window.innerWidth) {
            windowWidth = window.innerWidth;
            splitText.revert();
            runSplit();
        }
        };

        window.addEventListener("resize", handleResize);

        return () => {
        window.removeEventListener("resize", handleResize);
        splitText?.revert(); // Clean up SplitType instances
        };
    }, []);

  return (
    <div className="home-wrapper">
        <Navigation />
        <div className="hero-section">
            <div className="hero-content">
                <h1>Since 2017, we've helped the most innovative forward-thinking startups and reputable companies design, build, and ship products and user experiences worth talking about.</h1>
            </div>
            <video src={HomeVideo} type="video/mp4" autoPlay loop muted />
        </div>
    </div>
  );
}

export default Home;