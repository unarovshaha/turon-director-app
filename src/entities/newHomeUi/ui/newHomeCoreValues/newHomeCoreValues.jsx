import React, {useRef} from 'react';

import cls from "./newHomeCoreValues.module.sass";
import image from "shared/assets/images/coreValues.png";
import image1 from "shared/assets/images/coreValues1.png";
import image2 from "shared/assets/images/coreValues2.png";
import image3 from "shared/assets/images/coreValues3.png";
import image4 from "shared/assets/images/coreValues4.png";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import classNames from "classnames";

const card = [
    {
        image: image1,
        title: "Ilmga muhabbat",
        desc: `Farzandlarimizda o‘rganishga bo‘lgan qiziqishni uyg‘otamiz va \n ilmiy tafakkurni rivojlantiramiz.`
    }, {
        image: image2,
        title: "Hurmat va mas’uliyat",
        desc: "Boshqalarga hurmat, o‘ziga va jamiyatga mas’uliyat hissini \n shakllantiramiz.",
        // lgColor: "#000000",
    }, {
        cardBg: "#CAA77F",
        lgBg: "#000",
        image: image3,
        title: "Innovatsiya va texnologiya",
        desc: "Zamonaviy texnologiyalar orqali ta’limni amaliy va interaktiv \n qilishga intilamiz."
    }, {
        image: image4,
        title: "Ijodkorlik va tanqidiy fikrlash",
        desc: "O‘quvchilarning fikrlashi, savol berishi va yechim topa olishini \n rag‘batlantiramiz."
    }
]

export const NewHomeCoreValues = () => {
    const container = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef(null);

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
            duration: 1.5,
            ease: "power3.out"
        });

        gsap.from(".event-card", {
            scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 80%",
                end: "bottom 75%",
                scrub: 1,
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.3
        });

    }, { scope: container });

    const render = () => {
        return card.map(item => (
            <div className={cls.cards__item} style={{background: item.cardBg}}>
                <div className={cls.avatar}>
                    <img src={item.image} alt=""/>
                </div>
                <div className={cls.info}>
                    <h2 className={cls.info__title} style={{color: item.lgBg}}>{item.title}</h2>
                    <p className={cls.info__desc} style={{color: item.lgBg}}>
                        {item.desc.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br/>
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>
        ))
    }

    return (
        <div ref={container} className={cls.coreValues} id={"coreValues"}>
            <div ref={headerRef} className={cls.coreValues__container}>
                <div className={cls.header}>
                    <p className={cls.header__subTitle}>Asosiy Qadriyatlarimiz</p>
                    <h1 className={cls.header__title}>
                        Farzandingiz nafaqat bilim, balki <br/>
                        hayotda kerakli fazilatlarni ham <br/>
                        o‘rganadi
                    </h1>
                    {
                        window.innerWidth <= 430
                            ? <img className={cls.header__image} src={image} alt=""/>
                            : <p className={cls.header__desc}>
                                Maktabimizda har bir bola bilim bilan birga hayotiy qadriyatlarni <br/>
                                ham o‘zlashtiradi – halollik, ijodkorlik va mas’uliyat.
                            </p>
                    }
                </div>
                <div className={cls.cards}>
                    {render()}
                </div>
            </div>
            <div ref={cardsRef} className={cls.coreValues__image}>
                <img className={classNames(cls.image, "event-card")} src={image} alt=""/>
            </div>
        </div>
    );
};
