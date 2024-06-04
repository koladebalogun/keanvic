"use client";
import Preloader from "../components/Preloader";
import Link from "next/link";
import SideNavBar from "../components/navigation/SideNavBar";
import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function Home() {
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.to(".site-header", 2, {
        opacity: 1,
        delay: 5.5,
        y: -40,
        ease: "power4.inOut",
        stagger: {
          amount: 0.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="container">
      <Preloader />
      <SideNavBar />
      <div className="site-content">
        <div className="video-container" id="video-container">
          <video autoPlay loop muted playsInline className="video">
            <source src="/intros.mp4" />
          </video>
        </div>

        <div className="site-header">
          <div className="site-header-title">
            <h1>Welcome to Keanvic Clothings</h1>
            <h3>Your Celebrity Designer</h3>
          </div>

          <div className="site-header-content">
            <p>At Keanvic Clothings, We design dreams, not just clothes! .</p>

            <a
              href="https://www.instagram.com/keanvic_clothings?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <button>Contact us</button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
