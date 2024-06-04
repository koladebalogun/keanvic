// import Navbar from "./components/Navbar";
import Navbar from "../components/navigation/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight:["300", "400", "700"] });

export const metadata = {
  title: "Keanvic"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
