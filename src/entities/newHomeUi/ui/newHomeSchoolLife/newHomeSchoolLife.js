import React, {useRef} from 'react';

import cls from "./newHomeSchoolLife.module.sass";
import image1 from "shared/assets/images/schoolLife1.jpg"
import image2 from "shared/assets/images/schoolLife2.jpg"
import image3 from "shared/assets/images/schoolLife3.jpg"
import image4 from "shared/assets/images/schoolLife4.jpg"
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import classNames from "classnames";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const list = [
    {
        image: image1,
        subTitle: "🌐 Xalqaro fan olimpiadalari",
        title: "🥇 100+  olimpiadasi g‘olibi",
    },
    {
        image: image2,
        subTitle: "📚 Insho va til tanlovlarida",
        title: "📖 3ta milliy grant sohibi",
    },
    {
        image: image3,
        subTitle: "🤖 Robototexnika",
        title: "💡 50+ loyiha va startap",
    },
    {
        image: image4,
        subTitle: "🏆 Sport musobaqalar",
        title: "🥇 30+ xalqaro mukofot",
    },
]

export const NewHomeSchoolLife = () => {
    const container = useRef(null);
    const headerRef = useRef(null);
    const sliderRef = useRef(null);
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

        gsap.from(sliderRef.current, {
            scrollTrigger: {
                trigger: sliderRef.current,
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
        return list.map((item, index) => {
            if (index > 0 && window.innerWidth <= 430) return null
            return (
                <div className={classNames(cls.card, "event-card")}>
                    <div className={cls.card__header}>
                        <img className={cls.card__image} src={item.image} alt=""/>
                        <p className={cls.card__info}>{item.subTitle}</p>
                    </div>
                    <div className={cls.card__text}>
                        <h2 className={cls.title}>{item.title}</h2>
                        <p className={cls.desc}>100+ o‘quvchi biologiya, matematika va fizika yo‘nalishlarida xalqaro
                            olimpiadalarda g‘oliblikni qo‘lga kiritgan.</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div ref={container} className={cls.schoolLife} id={"schoolLife"}>
            <div ref={headerRef} className={cls.schoolLife__header}>
                <div className={cls.title}>
                    <span className={cls.title__inner}>Maktab hayotidagi</span>
                    muhim zafarlar
                </div>
                <p className={cls.desc}>
                    Turon Xalqaro Maktabi qisqa vaqt ichida ta’lim sifati, o‘quv dasturlari va <br/>
                    o‘quvchilarning yutuqlari bo‘yicha O‘zbekistonning ilg‘or maktablari qatoridan o‘rin <br/>
                    oldi. Maktabimiz o‘quvchilari nafaqat mahalliy, balki xalqaro miqyosdagi tanlov, <br/>
                    olimpiada va loyihalarda faol ishtirok etib, bir qancha medallar, diplomlar va <br/>
                    grantlarga ega bo‘lishgan.
                </p>
            </div>
            <div ref={sliderRef} className={cls.schoolLife__slider}>
                <p className={cls.title}>Turon Xalqaro Maktabi Yutuqlari Bilan Tanishing</p>
                <div className={cls.bars}>
                    <p style={{color: "#3E323280"}} className={cls.bars__inner}>{"<"}</p>
                    <p style={{color: "#3E3232"}} className={cls.bars__inner}>{">"}</p>
                </div>
            </div>
            <div ref={cardsRef} className={cls.schoolLife__container}>
                {render()}
            </div>
        </div>
    );
};
