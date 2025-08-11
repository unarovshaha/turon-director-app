import React, {useRef} from 'react';

import cls from "./newHomeCalendar.module.sass";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import classNames from "classnames";

const weekdays = ["DU", "SE", "CH", "PA", "JU", "SH", "YA"]

const list = [
    {
        calendarRows: [
            [1, 2, 3, 4, 5, 6, 7],
            [8, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
        ]
    },
    {
        calendarRows: [
            [1, 2, 3, 4, 5, 6, 7],
            [8, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
        ]
    },
    {
        calendarRows: [
            [1, 2, 3, 4, 5, 6, 7],
            [8, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
        ]
    },
    {
        calendarRows: [
            [1, 2, 3, 4, 5, 6, 7],
            [8, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
        ]
    },
    {
        calendarRows: [
            [1, 2, 3, 4, 5, 6, 7],
            [8, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
        ]
    },
    {
        calendarRows: [
            [1, 2, 3, 4, 5, 6, 7],
            [8, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
        ]
    },
]

export const NewHomeCalendar = () => {
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
        return list.map((item, index) => {
            if (index > 0 && window.innerWidth <= 430) return null
            return (
                <div className={classNames(cls.container, "event-card")}>
                    <div className={cls.calendarSub}>
                        <div className={cls.header}>Dekabr</div>
                        <div className={cls.grid}>
                            {weekdays.map((day, idx) => (
                                <div key={idx} className={cls.day}>{day}</div>
                            ))}
                            {item.calendarRows.map((row, rowIndex) =>
                                row.map((num, colIndex) => {
                                    const isSelected = rowIndex === 1 && colIndex === 0
                                    const isGrey = rowIndex === 4
                                    return (
                                        <div
                                            key={`${rowIndex}-${colIndex}`}
                                            className={`${cls.cell} ${isSelected ? cls.selected : ""} ${isGrey ? cls.grey : ""}`}
                                        >
                                            {num}
                                        </div>
                                    )
                                })
                            )}
                        </div>
                    </div>

                    <div className={cls.rightPanel}>
                        <div className={cls.rightPanelTitle}>Muhim kunlar</div>
                        <div className={cls.importantDate}>
                            <span className={cls.highlight}>8-Dekabr</span> / Konstitutsiya kuni
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div ref={container} className={cls.calendar} id={"calendar"}>
            <div ref={headerRef} className={cls.calendar__header}>
                <h1 className={cls.title}>Muhim sanalar</h1>
                <p className={cls.desc}>
                    Qabul va o‘quv jarayoniga oid muhim sanalarni kuzatib boring — siz <br/>
                    hech narsani o‘tkazib yubormaysiz.
                </p>
            </div>
            <div className={cls.calendar__slider}>
                <p className={cls.title}>Muhim sanalar</p>
                <div className={cls.bars}>
                    <p style={{color: "#3E323280"}} className={cls.bars__inner}>{"<"}</p>
                    <p style={{color: "#3E3232"}} className={cls.bars__inner}>{">"}</p>
                </div>
            </div>
            <div ref={cardsRef} className={cls.calendar__container}>
                {render()}
            </div>
        </div>
    );
};
