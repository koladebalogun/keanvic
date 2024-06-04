"use client";
import { useEffect } from "react";

// packages
import AOS from "aos";
import "aos/dist/aos.css";

// styles
import styles from "./style.module.css";

export default function SecondServiceTemplate({ data }) {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div>
      <div className={styles.content_inner2}>
        <div data-aos="fade-up">
          <img src={data.src} alt="" />
        </div>
        <div data-aos="fade-up">
          <h4>{data.title}</h4>
          {/* <ul>
            <li>{data.items[0]}</li>
            <li>{data.items[1]}</li>
            <li>{data.items[2]}</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}
