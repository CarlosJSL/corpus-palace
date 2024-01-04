import { Button } from "@/app/components/Button/Button";
import styles from "./Products.module.css";

export const Products = () => {
  return (
    <section className={styles.container}>
      <div className={styles.centeredContainer}>
        <p>EXPERIMENTE A NOSSA NOVA LOÇÃO</p>
        <p className={styles.title}>
          Agora disponível no nosso estabelecimento, temos a nova loção
          fantástica da skincare que faz maravilhas pelo rosto
        </p>
        <Button text="Pedir Informações" type="tertiary" />
      </div>
    </section>
  );
};
