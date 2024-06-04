"use client";
import React, { useLayoutEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";

export default function SideNavBar() {
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.to(".clipper-left", 2, {
        delay: 2.8,
        clipPath: "inset(0 100% 0 0)",
        ease: "power4.inOut",
      })
        .to(".clipper-right", 2, {
          clipPath: "inset(0 0 0 100%)",
          ease: "power4.inOut",
        })

        .from(".sidebar-nav > *, .site-nav > *", 1, {
          opacity: 0,
          x: 40,
          ease: "power4.inOut",
          stagger: {
            amount: 0.5,
          },
        });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="sidebar-nav">
        <div className="site-logo">
          {/* <Link href="/">
            <Image src="/logo.jpg" width={100} height={40} />
          </Link> */}
        </div>
      </div>
      <div className="clipper-left">
        <div className="loader-text">KEANVIC</div>
      </div>
      <div className="clipper-right">
        <div className="loader-text">CLOTHINGS</div>
      </div>
    </>
  );
}
