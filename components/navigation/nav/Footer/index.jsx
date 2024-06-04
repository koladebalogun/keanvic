import styles from "./style.module.css";

export default function index() {
  return (
    <div className={styles.footer}>
      <p>
        Contact us on{" "}
        <a
          href="https://www.instagram.com/keanvic_clothings?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
        >
          {" "}
          Instagram
        </a>{" "}
      </p>
    </div>
  );
}
