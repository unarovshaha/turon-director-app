import React, {useRef} from 'react';

import cls from "./newHomeFileDownload.module.sass";
import pdfImage from "shared/assets/images/📎.png";
import docxImage from "shared/assets/images/📄.png";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import classNames from "classnames";

const list = [
    {
        title: "PDF",
        desc: "Maktab broshyurasi (2025–2026)",
        percent: 30,
        image: pdfImage,
        avatarBg: "#EFF2F6"
    },
    {
        title: "DOCX",
        desc: "Kontrakt shartnoma namunasi",
        percent: 30,
        image: docxImage,
        avatarBg: "#FFFFFF",
        cardBg: "#072E92",
        cardColor: "#FFF",
        lineColor: "#CAA77F",
    },
    {
        title: "PDF",
        desc: "Qabul ariza shakli",
        percent: 30,
        image: pdfImage,
        avatarBg: "#EFF2F6",
        descColor: "#79808A"
    }
]

export const NewHomeFileDownload = () => {
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
                style={{background: item?.cardBg, color: item?.cardColor}}
                className={classNames(cls.card, "event-card")}
            >
                <div className={cls.card__header}>
                    <h2
                        className={cls.title}
                        style={{color: item?.cardColor}}
                    >
                        {item.title}
                    </h2>
                    <div
                        style={{background: item.avatarBg}}
                        className={cls.avatar}
                    >
                        <img src={item.image} alt=""/>
                    </div>
                </div>
                <p
                    style={{color: item?.cardColor}}
                    className={cls.card__desc}
                >
                    {item.desc}
                </p>
                <div className={cls.card__footer}>
                    <div className={cls.info}>
                        <p style={{color: item?.cardColor}} className={cls.info__inner}>📥 Yuklab olish</p>
                        <p style={{color: item?.cardColor}} className={cls.info__percent}>{item.percent}%</p>
                    </div>
                    <div className={cls.line}>
                        <div
                            style={{width: `${item.percent}%`, background: item.lineColor}}
                            className={cls.line__percent}
                        />
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div ref={container} className={cls.fileDownload} id={"fileDownload"}>
            <div ref={headerRef} className={cls.fileDownload__header}>
                <h1 className={cls.title}>
                    <span className={cls.title__inner}>Quyidagi fayllarni PDF/DOC</span>
                    formatda yuklab olishingiz <br/> mumkin.
                </h1>
                <p className={cls.subTitle}>
                    Ota-onalar va abituriyentlar maktab haqida <br/>
                    zarur hujjat va materiallarni oson topib, yuklab <br/>
                    olishi uchun qulay bo‘lim.
                </p>
            </div>
            <div ref={cardsRef} className={cls.fileDownload__container}>
                {render()}
            </div>
        </div>
    );
};
