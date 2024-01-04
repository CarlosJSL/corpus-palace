import styles from "./Card.module.css";
import Image from "next/image";

type CardProps = {
  title: string;
  image: string;
  comment: string;
};

export const Card = ({ title, image, comment }: CardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.blockquote}>
          <Image
            src="/images/blockquote.png"
            width={60}
            height={60}
            alt="quote"
          />
        </div>
        <div className={styles.imageBox}>
          <Image
            src={image}
            width={100}
            height={100}
            alt="quote"
            className={styles.personImage}
          />
        </div>
      </div>
      <div className={styles.comment}>
        <p>{comment}</p>
      </div>
      <p>{title}</p>
    </div>
  );
};
