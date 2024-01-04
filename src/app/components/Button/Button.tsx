import styles from "./Button.module.css";
import Image from "next/image";

type ButtonProps = {
  text: string;
  type?: "primary" | "secondary" | "tertiary";
  hasIcon?: boolean;
};

export const Button = ({
  text,
  type = "primary",
  hasIcon = true,
}: ButtonProps) => {
  const containerClassName = `${styles.container} ${
    type === "primary"
      ? styles.primary
      : type === "secondary"
        ? styles.secondary
        : styles.tertiary
  }`;
  const iconName =
    type === "primary" || type === "tertiary"
      ? "/arrow-diagonal.svg"
      : "/arrow-diagonal-filled.svg";

  return (
    <button className={containerClassName}>
      {text}
      {hasIcon && <Image src={iconName} width={12} height={12} alt="arrow" />}
    </button>
  );
};
