import React, {useEffect, useRef, useState} from 'react';

import cls from "./newHomeDailyLife.module.sass";
import image1 from "shared/assets/images/homeGallery1.jpg";
import image2 from "shared/assets/images/homeGallery2.jpg";
import image3 from "shared/assets/images/homeGallery3.jpg";
import image4 from "shared/assets/images/homeGallery4.jpg";
import image5 from "shared/assets/images/homeGallery5.jpg";
import image6 from "shared/assets/images/homeGallery6.jpg";
import image7 from "shared/assets/images/DSC09808.jpg";
import image8 from "shared/assets/images/DSC09946.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useTranslation} from "react-i18next";
import {Modal} from "shared/ui/modal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const dataImg = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
]

export const NewHomeDailyLife = () => {
    const container = useRef(null);
    const headerRef = useRef(null);
    const imagesRef = useRef(null);
    const {t} = useTranslation()

    const [active , setActive] = useState(null)


    const renderImg = () => {
        return dataImg.map(item => (
            <img onClick={() => setActive(item)} className={`${cls.image} daily-image`} src={item} alt="turon-o'quvchilar"/>
        ))
    }

    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [active]);

    useGSAP(() => {

        gsap.from(headerRef.current, {
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top 80%",
                end: "bottom 100%",

                scrub: 1,
                toggleActions: "play none none reverse",

            },
            x: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
        });

        gsap.from(".daily-image", {
            scrollTrigger: {
                trigger: imagesRef.current,
                start: "top 85%",
                end: "bottom 110%",
                scrub: 1,

            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
        });
    }, { scope: container });

    return (
        <div ref={container} id={'slider'} className={cls.dailyLife}>
            <div ref={headerRef} className={cls.dailyLife__header}>
                <h1 className={cls.title}>
                    <span className={cls.title__inner}>{t("homeDailyLife.title")}</span>
                    {t("homeDailyLife.span")}
                </h1>
                <p className={cls.desc}>
                    {t("homeDailyLife.desc")}
                </p>
            </div>
            <div ref={imagesRef} className={cls.dailyLife__container}>
                {renderImg()}
            </div>

            {active && <div onClick={() => setActive(null)} className={cls.modal}>

                <div className={cls.modal__img}>
                    <img  src={active} alt="turon-o'quvchilar"/>
                </div>
            </div>}
        </div>
    );
};
