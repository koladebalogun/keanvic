"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./style.module.css";
import Link from "next/link";

export default function AboutBanner() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  let tl = gsap.timeline();
  useLayoutEffect(() => {
    // Images Vars
    const girlImage = images.firstElementChild; // or children[0]

    //content vars
    const headlineFirst = content.children[0].children[0];
    // const headlineSecond = headlineFirst.nextSibling;
    // const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    let ctx = gsap.context(() => {
      gsap.to(app, 0, { css: { visibility: "visible" } });

      tl.from(girlImage.current, 1.2, {
        y: 1280,
        opacity: 0,
        ease: "power3.easeInOut",
      }).from(
        girlImage.firstElementChild,
        2,
        { scale: 1.6, ease: "power3.easeInOut" },
        0.2
      );

      //Content Animation
      tl.from(
        [
          headlineFirst.children,
          //   headlineSecond.children,
          //   headlineThird.children,
        ],
        1,
        {
          y: 44,
          ease: "power3.easeInOut",
          delay: 0.8,
          stagger: {
            amount: 0.5,
          },
        },
        0.15,
        "Start"
      )
        .from(contentP, 1, { y: 20, opacity: 0, ease: "power3.easeInOut" }, 1.4)
        .from(
          contentButton,
          1,
          { y: 20, opacity: 0, ease: "power3.easeInOut" },
          1.6
        );
    });

    return () => ctx.revert();
  }, [tl]);

  return (
    <div className={styles.hero} ref={(el) => (app = el)}>
      <div className={styles.container}>
        <div className={styles.hero_inner}>
          <div className={styles.hero_content}>
            <div
              className={styles.hero_content_inner}
              ref={(el) => (content = el)}
            >
              <h1>
                <div className={styles.hero_content_line}>
                  <div className={styles.hero_content_line_inner}>About Us</div>
                </div>
              </h1>
              <p>
                At Keanvic Clothings, we redefine the meaning of Fashion by
                expertly unlocking the power of confidence with our carefully
                crafted attires, we help you step into effortless elegance with
                our stunning collection. Nothing makes picture perfect moments
                than a perfectly tailored custom piece from Keanvic Clothings.
              </p>
              <div className={styles.btn_row}>
                <Link href="/services">
                  <button className={styles.explore_button}>
                    Explore our Clothes
                    <div className={styles.arrow_icon}>
                      <img src="/arrow.svg" alt="row" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.hero_images}>
            <div
              ref={(el) => (images = el)}
              className={styles.hero_images_inner}
            >
              <div className={`${styles.hero_image} ${styles.girl}`}>
                <img src="aboutus.png" alt="intro image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
