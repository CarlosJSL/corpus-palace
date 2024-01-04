import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Header } from "./components/Header/Header";
import { Services } from "./sections/services/Services";
import { Clients } from "./sections/clients/Clients";
import { Products } from "./sections/products/Products";
import { Team } from "./sections/team/Team";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/home.png"
          alt="main"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <section className={styles.land}>
        <Header />
        <div className={styles.headerSpace} />
        <div className={styles.container}>
          <div />
          <div className={styles.titleBox}>
            <h1>CORPUS</h1>
            <h1>PALACE</h1>
            <h1>by Magda Poeiras</h1>
          </div>
          <Link href="/#services" scroll={true}>
            <Image
              src="/scroll-down.svg"
              width={60}
              height={60}
              alt="scroll-down"
            />
          </Link>
        </div>
      </section>
      <Services />
      <Clients />
      <Products />
      <Team />
      <Footer />
    </main>
  );
}
