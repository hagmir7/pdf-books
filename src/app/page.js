import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "./components/Carousel";
import Books from "./components/Books";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Books />
    </div>

  );
}
