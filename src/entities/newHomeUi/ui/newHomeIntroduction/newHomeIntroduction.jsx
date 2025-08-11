import React, {useRef} from 'react';

import cls from "./newHomeIntroduction.module.sass";
import image from "shared/assets/images/director.png";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export const NewHomeIntroduction = () => {
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

    return (
        <div ref={container} className={cls.introduction} id={"introduction"}>
            <div ref={headerRef} className={cls.introduction__info}>
                <h1 className={cls.title}>
                    Hurmatli ota-onalar, aziz o‘quvchilar va qadrli mehmonlar!
                </h1>
                <img className={cls.image} src={image} alt=""/>
                <div className={cls.inner}>
                    <h3 className={cls.inner__subTitle}>
                        TURON XALQARO MAKTABI nomidan sizni samimiy qutlayman va veb-saytimizga tashrif buyurganingizdan
                        mamnunman.
                    </h3>
                    <p className={cls.inner__desc}>
                        Bugungi kunda ta’lim faqat bilim berish emas — bu hayotga <br/>
                        tayyorlash, ijodkorlikni rivojlantirish, tanqidiy fikrlash, yetakchilik va <br/>
                        ijtimoiy mas’uliyat kabi ko‘nikmalarni shakllantirishdir. Bizning <br/>
                        maktabda har bir bola — bu noyob iste’dod egasi, har bir ota-ona — <br/>
                        bizning ishonchli hamkorimiz, har bir o‘qituvchi esa — yo‘l <br/>
                        ko‘rsatuvchi ilhom manbaidir.
                        <br/>
                        <br/>
                        Biz innovatsion ta’lim uslublarini, xalqaro tan olingan dasturlarni <br/>
                        va zamonaviy texnologiyalarni uyg‘unlashtirgan holda, farzandlaringizga <br/>
                        keng imkoniyatlar yaratishga intilamiz. Asosiy e’tiborimiz — <br/>
                        o‘quvchining fikrlashi, mustaqil qaror qabul qilishi, jamoada ishlashi <br/>
                        va insoniy fazilatlari bilan jamiyatda o‘z o‘rnini topishidadir.
                        <br/>
                        <br/>
                        Agar siz farzandingizga mustahkam bilim, kuchli tarbiya va yorqin <br/>
                        kelajak tilasangiz — siz to‘g‘ri maskandasiz. Biz bilan birga bo‘ling, <br/>
                        bizga ishoning va farzandingiz hayotidagi eng muhim sarguzashtga <br/>
                        birgalikda yo‘l oling!
                        <br/>
                        <br/>
                        Hurmat bilan, <br/>
                        Maxmud Yuldashev
                    </p>
                </div>
            </div>
            <div ref={cardsRef} className={cls.introduction__image}>
                <img className="event-card" src={image} alt=""/>
            </div>
        </div>
    );
};
