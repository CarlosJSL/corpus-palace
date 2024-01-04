"use client";

import Image from "next/image";
import styles from "./Services.module.css";
import { Button } from "../../components/Button/Button";
import Slider from "react-slick";
import { useRef, useState } from "react";
import { slides, settings } from "./utils";

export const Services = () => {
  const slideRef = useRef();
  const [serviceFocused, setServiceFocused] = useState("hairstylist");

  const changeService = (service: string) => {
    slideRef.current.style.opacity = 0;
    setTimeout(() => {
      slideRef.current.style.opacity = 1;
      setServiceFocused(service);
    }, 300);
  };

  const verifySection = (service: string) => {
    if (service === serviceFocused) return styles.target;
    return undefined;
  };

  return (
    <section className={styles.services} id="services">
      <div className={styles.servicesContainer}>
        <h2>
          Os Nossos <br className={styles.titleBreak} />
          Serviços
        </h2>
        <div className={styles.description}>
          <p>
            Ofereçemos uma vasta gama de serviços para satisfazer a todas as
            suas necessidades e mais algumas. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
        <div className={styles.professions}>
          <p
            className={verifySection("hairstylist")}
            onClick={() => changeService("hairstylist")}
          >
            HAIRSTYLIST
          </p>
          <p
            className={verifySection("nails")}
            onClick={() => changeService("nails")}
          >
            NAILS DESIGNER
          </p>
          <p
            className={verifySection("skincare")}
            onClick={() => changeService("skincare")}
          >
            SKINCARE
          </p>
          <p
            className={verifySection("biomed")}
            onClick={() => changeService("biomed")}
          >
            BIOMEDICINA
          </p>
          <p
            className={verifySection("chinese")}
            onClick={() => changeService("chinese")}
          >
            {" "}
            MEDICINA TRADICIONAL CHINESA
          </p>
          <p
            className={verifySection("quiroprax")}
            onClick={() => changeService("quiroprax")}
          >
            QUIROPRAXIA
          </p>
        </div>
        <div className={styles.buttonsContainer}>
          <Button text="Ver Página" />
          <Button text="Ver Outro" type="secondary" />
        </div>
      </div>
      <div className={styles.slide} ref={slideRef}>
        <Slider {...settings} centerMode>
          {slides[serviceFocused].map((slide, index) => (
            <div key={index}>
              <Image
                src={slide.src}
                width={390}
                height={600}
                alt={slide.alt}
                quality={100}
                className={styles.slideImage}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
