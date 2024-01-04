"use client";

import styles from "./Team.module.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import useWindowSize from "@/app/hooks/useWindowSize";
import Link from "next/link";

type SlideButtonsProps = {
  onClickRightArrow: () => void;
  onClickLeftArrow: () => void;
};

type CarouselItemProps = {
  imageName: string;
  name: string;
  profession: string;
  index: number;
};

const carouselItems = [
  {
    imageName: "/images/slide1.jpeg",
    name: "Magda Poeiras",
    profession: "MASSOTERAPEUTA",
  },
  {
    imageName: "/images/slide2.jpeg",
    name: "Magda Poeiras",
    profession: "MASSOTERAPEUTA",
  },
  {
    imageName: "/images/slide3.jpeg",
    name: "Magda Poeiras",
    profession: "MASSOTERAPEUTA",
  },
  {
    imageName: "/images/slide4.jpeg",
    name: "Magda Poeiras",
    profession: "MASSOTERAPEUTA",
  },
  {
    imageName: "/images/slide1.jpeg",
    name: "Sónia Louro",
    profession: "HAIRSTYLIST",
  },
  {
    imageName: "/images/slidemain.jpeg",
    name: "Sónia Louro",
    profession: "HAIRSTYLIST",
  },
];

const SlideButtons = ({
  onClickRightArrow,
  onClickLeftArrow,
}: SlideButtonsProps) => {
  return (
    <div className={styles.sliderButtonsContainer}>
      <button className={styles.slideButton} onClick={onClickRightArrow}>
        <Image
          src="/arrow.svg"
          width={18}
          height={15}
          alt="arrow"
          className={styles.rightArrow}
        />
      </button>
      <button className={styles.slideButton} onClick={onClickLeftArrow}>
        <Image src="/arrow.svg" width={18} height={15} alt="arrow" />
      </button>
    </div>
  );
};

const CarouselItem = ({
  imageName,
  name,
  profession,
  index,
}: CarouselItemProps) => {
  const imageRotation = index % 2 === 0 ? styles.even : styles.odd;

  return (
    <div>
      <Link href="/#team" scroll={true}>
        <Image
          alt="slide1"
          src={imageName}
          width={300}
          height={280}
          quality={100}
          className={`${styles.slideImages} ${imageRotation}`}
        />
        <div className={styles.description}>
          <p>{name}</p>
          <p>{profession}</p>
        </div>
      </Link>
    </div>
  );
};

export const Team = () => {
  const slideRef = useRef<Slider>();
  const focusedSlide = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [slideItems, setSlideItems] = useState(carouselItems);
  const { isMobile, isTablet } = useWindowSize(global.window);

  const onSlideChange = () => {
    const [actualSlide, ...newArray] = slideItems;

    if (!slideRef.current || !focusedSlide.current) return;

    slideRef.current.slickNext();
    focusedSlide.current.style.opacity = 0;
    setTimeout(() => {
      focusedSlide.current.style.opacity = 1;
      setSlideItems([...newArray, actualSlide]);
    }, 300);
  };

  const onSlideChangeLeft = () => {
    const slideItemsCopy = [...slideItems];
    const lastElement = slideItemsCopy.pop();

    if (!slideRef.current || !focusedSlide.current) return;

    slideRef.current.slickPrev();
    focusedSlide.current.style.opacity = 0;
    setTimeout(() => {
      focusedSlide.current.style.opacity = 1;
      setSlideItems([lastElement, ...slideItemsCopy]);
    }, 300);
  };

  return (
    <section className={styles.container} id="team">
      <div className={styles.titleContainer}>
        <p>Conheça a Nossa Equipa</p>
        <Image
          src="/images/symbol.png"
          width={190}
          height={180}
          alt="symbol"
          className={styles.symbol}
          priority
        />
      </div>
      <div className={styles.focusedSlide} ref={focusedSlide}>
        <Image
          alt="slide1"
          src={slideItems[slideItems.length - 1]?.imageName}
          width={430}
          height={490}
          quality={100}
          className={styles.focusedSlideImage}
        />
        <div className={styles.professionalDescriptionContainer}>
          <div className={styles.indicator} />
          <p>{slideItems[slideItems.length - 1]?.name}</p>
          <p>{slideItems[slideItems.length - 1]?.profession}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            ultricies lorem. Pellentesque facilisis quam mi, ut mollis tellus
            placerat congue. Phasellus ullamcorper justo libero, eget luctus
            augue aliquet id.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            ultricies lorem. Pellentesque facilisis quam mi, ut mollis tellus
            placerat congue. Phasellus ullamcorper justo libero, eget luctus
            augue aliquet id.
          </p>
        </div>
      </div>
      <div className={styles.slideContainer}>
        <div className={styles.slideContainerContent}>
          <div>
            <SlideButtons
              onClickRightArrow={onSlideChange}
              onClickLeftArrow={onSlideChangeLeft}
            />
          </div>
          <Slider
            slidesToShow={slidesToShow}
            ref={slideRef}
            className={styles.slide}
            onInit={() => {
              const slidesToShow = isTablet ? 3 : isMobile ? 1 : 4;
              setSlidesToShow(slidesToShow);
            }}
          >
            {carouselItems.map((item, index) => (
              <CarouselItem
                key={index}
                index={index}
                imageName={item.imageName}
                name={item.name}
                profession={item.profession}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
