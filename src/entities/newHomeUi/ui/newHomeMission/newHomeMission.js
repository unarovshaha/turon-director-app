import React, {useRef} from 'react';

import cls from "./newHomeMission.module.sass";
import missionImg from "shared/assets/images/missionImg.png";
import visionImg from "shared/assets/images/visionImg.png";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import classNames from "classnames";

export const NewHomeMission = () => {
    const container = useRef(null);
    const headerRef = useRef(null);
    const headerRef1 = useRef(null);
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

        gsap.from(headerRef1.current, {
            scrollTrigger: {
                trigger: headerRef1.current,
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

    return (
        <div ref={container} className={cls.mission} id={"missions"}>
            <div ref={headerRef1} className={cls.mission__header}>
                <img className={cls.image} src={missionImg} alt=""/>
                <h1 className={cls.title}>
                    Missiya va Vizyon: Farzandingiz <br/>
                    uchun ishonchli yo‘nalish
                </h1>
                <div className={cls.btn}>
                    <div className={cls.btn__inner}>
                        <p>↓</p>
                    </div>
                </div>
            </div>
            <div ref={cardsRef} className={cls.mission__container}>
                <div  ref={headerRef} className={cls.info}>
                    <h1 className={cls.info__header}>
                        Ilm, innovatsiya <br/>
                        va orzu sari yo‘l
                    </h1>
                    <p  ref={headerRef} className={cls.info__desc}>
                        Turon Xalqaro Maktabi o‘quvchilariga zamonaviy dunyo uchun <br/>
                        zarur bo‘lgan bilim, ko‘nikma va qadriyatlarni uyg‘unlashtirgan <br/>
                        ta’lim muhitini yaratadi.
                    </p>
                    <img className={classNames(cls.info__image, "event-card")} src={visionImg} alt=""/>
                </div>
                <div className={classNames(cls.task, "event-card")}>
                    <h2 className={cls.task__title}>Missiya</h2>
                    <p className={cls.task__desc}>
                        O‘zbekistonda o‘quvchilarga fan, texnologiya, muhandislik va matematika bo‘yicha, axborot
                        texnologiyalari bilan integratsiyalashgan holda ajoyib ta’lim berishdan iborat.
                        Bizning yondashuvimiz qat’iy akademik standartlarni amaliy tajriba bilan birlashtirib,
                        bitiruvchilarimizni tez o‘zgaruvchan global dunyo talablari uchun tayyorlaydi.
                        Hozirgi zamon yoshlari e'tiborini eski nazariya va formulalarni yodlash bilan jalb qilish
                        imkonsiz ekan, biz o'qitish va amaliyot jarayoniga zamonaviy texnalogiyalarni jalb qilish
                        tarafdorimiz.
                    </p>
                </div>
            </div>
        </div>
    );
};
