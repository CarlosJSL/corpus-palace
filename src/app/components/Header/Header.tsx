"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import useScroll from "@/app/hooks/useScroll";
import { useEffect, useState } from "react";

export const Header = () => {
  const isScrollAtTop = useScroll();
  const [headerClass, setHeaderClass] = useState<string | undefined>(undefined);

  useEffect(() => {
    setHeaderClass(
      isScrollAtTop
        ? `${styles.header}`
        : `${styles.header} ${styles.scrollEffect}`,
    );
  }, [isScrollAtTop]);

  return (
    <header className={headerClass}>
      <Image
        quality={100}
        alt="Logo"
        width={70}
        height={70}
        priority
        src="/images/corpus-palace-logo.png"
        className={styles.logo}
      />
      <div className={styles.headerMenus}>
        <a href="#/">Home</a>
        <a href="#/">Serviços</a>
        <a href="#/">Galeria</a>
        <a href="#/">Contactos</a>
      </div>
      <div className={styles.contactUs}>
        <a href="#/">
          <Image src="/facebook.svg" width={16} height={16} alt="facebook" />
        </a>
        <a href="#/">
          <Image src="/instagram.svg" width={16} height={16} alt="instagram" />
        </a>
        <a href="#/">
          <Image src="/twitter.svg" width={16} height={16} alt="twitter" />
        </a>
        <a href="#/">
          <Image src="/phone.svg" width={30} height={30} alt="phone" />
        </a>
      </div>
    </header>
  );
};
