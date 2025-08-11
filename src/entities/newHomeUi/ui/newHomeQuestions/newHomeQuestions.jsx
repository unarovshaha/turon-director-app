import React, {useRef} from 'react';

import {Accordion} from "shared/ui/accardion/accardion";
import cls from "./newHomeQuestions.module.sass";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const list = [
    {
        title: "Qaysi hujjatlar talab etiladi?"
    }, {
        title: "Qabul qanday bosqichlardan iborat?"
    }, {
        title: "Kirish imtihonlari barchaga majburiymi?"
    }, {
        title: "To‘lovni bo‘lib-bo‘lib to‘lash mumkinmi?"
    }, {
        title: "Qanday imtiyozlar mavjud?"
    }
]

export const NewHomeQuestions = () => {
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
        return list.map(item => {
            return (
                <Accordion
                    clazz={"event-card"}
                    title={item.title}
                    children={
                        <ol className={cls.list}>
                            <li>O‘quvchining tug‘ilganlik guvohnomasi nusxasi</li>
                            <li>Ota-onaning pasport nusxasi</li>
                            <li>3x4 rasm (3 dona)</li>
                            <li>Oldingi sinfdan baholar ko‘chirmasi (agar mavjud bo‘lsa)</li>
                        </ol>
                    }
                />
            )
        })
    }

    return (
        <div ref={container} className={cls.questions} id={"question"}>
            <div ref={headerRef} className={cls.questions__header}>
                <h1 className={cls.title}>
                    Qabul jarayoni haqida tez-tez <br/>
                    so‘raladigan savollar
                </h1>
                <p className={cls.subTitle}>
                    Qabul qanday kechadi? Qanday hujjatlar kerak? To‘lov <br/>
                    qanday bo‘ladi? Biz sizni qiziqtiradigan eng muhim <br/>
                    savollarga bu yerda javob berdik.
                </p>
            </div>
            <div ref={cardsRef} className={cls.questions__container}>
                {render()}
            </div>
        </div>
    );
};
