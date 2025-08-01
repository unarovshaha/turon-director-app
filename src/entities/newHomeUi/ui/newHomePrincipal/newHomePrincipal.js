import React, { useRef } from 'react';
import cls from "./newHomePrincipal.module.sass";
import image from "shared/assets/images/principal.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useTranslation} from "react-i18next";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const list = [1, 2, 3];

export const NewHomePrincipal = () => {
    const container = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef(null);
    const {t} = useTranslation()

    useGSAP(() => {

        gsap.from(headerRef.current, {
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top 80%",
                end: "bottom 80%",
                toggleActions: "play none none reverse",
                scrub: 1,
            },
            x: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        });

        gsap.from(".event-card", {
            scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 80%",
                end: "bottom 80%",
                scrub: 1,
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.3
        });

    }, { scope: container });

    return (
        <div ref={container} className={cls.principal} id={"events"}>
            <div ref={headerRef} className={cls.principal__header}>
                <h1 className={cls.title}>{t("homePrincipal.title")}</h1>
                <p className={cls.subTitle}>
                    {t("homePrincipal.desc")}
                </p>
            </div>
            <div ref={cardsRef} className={cls.principal__container}>
                {list.map((item, index) => (
                    <div key={index} className={`${cls.card} event-card`}>
                        <div className={cls.card__header}>
                            <img className={cls.image} src={image} alt="" />
                            <p className={cls.info}>25-avgust, 2025</p>
                        </div>
                        <h2 className={cls.card__title}>{t("homePrincipal.boxTitle")}</h2>
                        <p className={cls.card__text}>{t("homePrincipal.boxDesc")}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
