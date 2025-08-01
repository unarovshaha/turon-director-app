import cls from "./newHomeGrade.module.sass";
import { useState, useRef } from "react";
import classNames from "classnames";

import sport from "shared/assets/images/sport.png";
import robo from "shared/assets/images/turonRobot.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const grades = [
    { id: 1, grade: "Grade 1-3" },
    { id: 2, grade: "Grade 4-6" },
    { id: 3, grade: "Grade 7-9" },
    { id: 4, grade: "Grade 10-11" },
];

export const NewHomeGrade = () => {
    const [active, setActive] = useState(grades[0].id);
    const [activeBox, setActiveBox] = useState(1);

    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const gradesRef = useRef(null);
    const cardsRef = useRef([]);

    useGSAP(() => {
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: titleRef.current,
                // start: "top 100%",
                scrub: 1,
                toggleActions: "play none none reverse",
            },
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        gsap.from(descRef.current, {
            scrollTrigger: {
                trigger: descRef.current,
                start: "top 80%",
                scrub: 1,
                toggleActions: "play none none reverse",
            },
            x: 100,
            opacity: 0,
            delay: 0.3,
            duration: 1,
            ease: "power3.out"
        });

        gsap.from(gradesRef.current.children, {
            scrollTrigger: {
                trigger: gradesRef.current,
                start: "top 100%",
                end: "bottom 80%",
                scrub: 1,
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 20,
            stagger: 0.15,
            delay: 0.6,
            duration: 0.8,
            ease: "power2.out"
        });

        cardsRef.current.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    end: "bottom 60%",
                    // toggleActions: "play none none reverse",
                    // markers: true
                },
                y: 80,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: index * 0.1
            });
        });



    }, { scope: containerRef });






    const renderItem = () => {
        return [1, 2, 3, 4, 5, 6].map((item, index) => {
            const isActive = activeBox === item;

            return (
                <div
                    key={item}
                    ref={el => cardsRef.current[index] = el}
                    onClick={() => setActiveBox(item !== activeBox ? item : null)}
                    className={classNames(cls.grade__wrapper_box, {
                        [cls.activeBox]: isActive
                    })}
                >
                    <img className={cls.grade__wrapper_box_img} src={robo} alt="" />
                    <div style={{ color: isActive ? "#fff" : "" }} className={cls.grade__wrapper_box_title}>
                        Robotics
                    </div>
                    <div style={{ color: isActive ? "#fff" : "" }} className={cls.grade__wrapper_box_desc}>
                        Robotics is an interdisciplinary branch of electronics and communication, computer science and engineering...
                    </div>
                </div>
            );
        });
    };

    const renderGrades = () => {
        return grades.map(item => (
            <div
                key={item.id}
                onClick={() => setActive(item.id)}
                className={classNames(cls.grade__header_left_grades_item, {
                    [cls.active]: active === item.id
                })}
            >
                {item.grade}
            </div>
        ));
    };

    return (
        <div ref={containerRef} id={"grading"} className={cls.grade}>
            <div className={cls.grade__header}>
                <div className={cls.grade__header_left}>
                    <div ref={titleRef} className={cls.grade__header_left_title}>
                        Har bir bosqichda sifatli va amaliy ta’lim
                    </div>
                    <div ref={gradesRef} className={cls.grade__header_left_grades}>
                        {renderGrades()}
                    </div>
                </div>
                <div ref={descRef} className={cls.grade__header_right}>
                    Ta’lim dasturi bosqichma-bosqich shakllangan bo‘lib, har bir sinfda o‘quvchilar uchun muhim bo‘lgan
                    fanlar tanlangan. Quyida sinflar bo‘yicha asosiy fanlar bilan tanishishingiz mumkin.
                </div>
                <div className={cls.grade__header_left_gradesMobile}>
                    {renderGrades()}
                </div>
            </div>

            <div className={cls.grade__wrapper} >
                {renderItem()}
            </div>
        </div>
    );
};
