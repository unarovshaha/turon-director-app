import React, {useRef} from 'react';

import cls from "./newHomeParentsComment.module.sass";
import image1 from "shared/assets/images/parents1.jpg";
import image2 from "shared/assets/images/parents1.jpg";
import image3 from "shared/assets/images/parents3.jpg";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import classNames from "classnames";

const list = [
    {
        image: image1,
        title: "Hellen Jummy"
    },
    {
        image: image2,
        title: "Ralph Edwards"
    },
    {
        image: image3,
        title: "Hellena John"
    }
]

export const NewHomeParentsComment = () => {
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
        return list.map(item => (
            <div
                className={classNames(cls.card, "event-card")}
            >
                <p className={cls.card__text}>
                    “Ikkita qizim ham shu maktabda tahsil oladi. Ikkalasining ham individual yondashuv asosida o‘sishini
                    kuzatyapmiz. Birining qiziqishi san’atga, ikkinchisining esa fanlarga – maktab ikkalasini ham
                    qo‘llab-quvvatlayapti. Har bir bola e’tiborda
                </p>
                <div className={cls.card__profile}>
                    <img className={cls.avatar} src={item.image} alt=""/>
                    <div className={cls.info}>
                        <h2 className={cls.info__title}>{item.title}</h2>
                        <p className={cls.info__desc}>Ota-ona</p>
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div ref={container} className={cls.fileDownload} id={"parentsComment"}>
            <div ref={headerRef} className={cls.fileDownload__header}>
                <h1 className={cls.title}>
                    <span className={cls.title__inner}>Biz haqimizda</span>
                    eng haqqoniy <br/>
                    fikrlar — bevosita ota-onalar va <br/>
                    o‘quvchilardan
                </h1>
                <p className={cls.subTitle}>
                    Maktabimiz haqida eng yaxshi fikrlar — bu biz bilan <br/>
                    bevosita tajriba orttirgan insonlarning samimiy <br/>
                    so‘zlari. Quyida ularning maktab hayoti haqidagi <br/>
                    fikrlari bilan tanishing:
                </p>
            </div>
            <div ref={cardsRef} className={cls.fileDownload__container}>
                {render()}
            </div>
        </div>
    );
};
