"use client";
import { useEffect } from "react";

// packages
import AOS from "aos";
import "aos/dist/aos.css";

// components
import FirstServiceTemplate from "../ui-templates/FirstServiceTemplate";
import SecondServiceTemplate from "../ui-templates/SecondServiceTemplate";

// styles
import styles from "./style.module.css";

export default function ServiceList({
  firstService,
  secondService,
  thirdService,
  fourthService,
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.list_intro}>
        <h3 data-aos="fade-up">
          We offer top notch varieties of wears like agbada, kaftan, wedding
          engagement styling and bespoke suits.
        </h3>
      </div>

      <div className={styles.content}>
        <FirstServiceTemplate data={firstService} />
        <SecondServiceTemplate data={secondService} />
        <FirstServiceTemplate data={thirdService} />
        <SecondServiceTemplate data={fourthService} />
      </div>
    </div>
  );
}
