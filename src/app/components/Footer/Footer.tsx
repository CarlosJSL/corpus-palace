import { Button } from "../Button/Button";
import styles from "./Footer.module.css";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.description}>
          <Image
            src="/images/corpus-palace-logo.png"
            alt="Logo"
            width={70}
            height={70}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
          <div className={styles.contactUs}>
            <a href="#/">
              <Image
                src="/facebook.svg"
                width={16}
                height={16}
                alt="facebook"
              />
            </a>
            <a href="#/">
              <Image
                src="/instagram.svg"
                width={16}
                height={16}
                alt="instagram"
              />
            </a>
            <a href="#/">
              <Image src="/twitter.svg" width={16} height={16} alt="twitter" />
            </a>
          </div>
        </div>
        <div className={styles.containerLinks}>
          <div className={styles.linksList}>
            <p className={styles.linksTitle}>Useful links</p>
            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
            </ul>
          </div>
          <div className={styles.linksList}>
            <p className={styles.linksTitle}>Links</p>
            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.messageUs}>
          <p>Message us</p>
          <form className={styles.form}>
            <input type="email" placeholder="Email address" />
            <textarea placeholder="Message" rows={8} />
            <div>
              <Button text="Submit" type="tertiary" hasIcon={false} />
            </div>
          </form>
        </div>
      </div>
      <div className={styles.moreInfo}>
        <div className={styles.moreInfoContent}>
          <a href="#">Terms of use |</a>
          <a href="#">Privacy policy |</a>
          <a href="#">Other information</a>
        </div>
        <div className={styles.moreInfoContent}>
          <a>Corpus Palace |</a>
          <a>Some random street name. PT |</a>
          <a>1 (351) 888888</a>
        </div>
      </div>
    </footer>
  );
};
