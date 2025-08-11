import React, {useRef} from 'react';

import cls from "./newHomePayment.module.sass";
import {HomeBtnUi} from "shared/ui/homeBtnUi/homeBtnUi";
import classNames from "classnames";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const list = [
    {
        title: "Boshlang‘ich sinflar",
        subTitle: "1-4"
    },{
        title: "O‘rta sinflar",
        subTitle: "5-9",
        cost: "1 400 000",
        month: "3 500 000",
        desc: "IELTS tayyorgarlik kursi",
        color: "#072E92"
    },{
        title: "Yuqori sinflar",
        subTitle: "10-11",
        payment: "16mln"
    }
]

export const NewHomePayment = () => {
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
                style={{
                    background: item.color,
                    gap: !!item.color ? "4rem" : "",
                    color: !!item.color ? "#FFF" : ""
                }}
            >
                <div className={cls.title}>
                    <h2 className={cls.title__sub} style={{color: !!item.color ? "#FFF" : ""}}>{item.title}</h2>
                    <h1 className={cls.title__main} style={{color: !!item.color ? "#FFF" : ""}}>
                        {item.payment ?? "14mln"}
                        <span className={cls.inner} style={{color: !!item.color ? "#FFF" : ""}}> / {item.subTitle} sinf</span>
                    </h1>
                </div>
                <ol className={classNames(cls.list, {
                    [cls.active]: !!item.color
                })}>
                    <li >Oyiga {item.cost ?? "1 600 000"} so‘m</li>
                    <li >Har chorakda {item.month ?? "4 000 000"} so‘m</li>
                    <li >{item.desc ?? "IT, robototexnika"}</li>
                    <li >Ovqatlanish (3 mahal)</li>
                </ol>

                <HomeBtnUi
                    // onClick={() => setActive(!active)}
                    extraClass={cls.btn}
                    children={" To‘lov haqida batafsil"}
                    type={!!item.color ? "request" : "contact"}
                />
            </div>
        ))
    }

    return (
        <div ref={container} className={cls.payment} id={"payment"}>
            <div ref={headerRef} className={cls.payment__header}>
                <h1 className={cls.title}>
                    <span className={cls.title__inner}>To‘lov tafsilotlarini</span>
                    ko‘rib chiqing
                </h1>
                <p className={cls.subTitle}>
                    Farzandingiz sifatli ta’lim olishini istaysizmi? Bizning maktabda to‘lov tizimi shaffof, <br/>
                    tushunarli va qulay shakllantirilgan. Quyida yillik va oylik to‘lovlar, chegirmalar hamda <br/>
                    qo‘shimcha xizmatlar narxlari haqida to‘liq ma’lumot olishingiz mumkin.
                </p>
            </div>
            <div ref={cardsRef} className={cls.payment__container}>
                {render()}
            </div>
        </div>
    );
};
