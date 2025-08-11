import cls from "./newHomeAssessment.module.sass"
import {HomeBtnUi} from "shared/ui/homeBtnUi/homeBtnUi";
import {useState} from "react";
import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);


const boxes = [
    {
        id: 1,
        title: "🟦 1-chorak",
        date: "📅 Sanasi: 10–15 oktabr",
        list: ["🧪 Test", "✍️ Yozma ish", "📈 Loyiha"],
        btnText: "Baholash taqvimi (PDF)",

    },
    {
        id: 2,
        title: "🟦 2-chorak",
        date: "📅 Sanasi: 20–25 dekabr",
        list: ["🧪 Test", "✍️ Yozma ish", "📈 Loyiha"],
        btnText: "PDF-ni yuklab olish",

    },
    {
        id: 3,
        title: "🟦 3-chorak",
        date: "📅 Sanasi: 15–20 mart",
        list: ["🧪 Test", "✍️ Yozma ish", "📈 Loyiha"],
        btnText: "Calendar yuklab olish",

    },
    {
        id: 4,
        title: "🟥 Yakuniy baholash",
        date: "📅 Sanasi: 25–31 may",
        list: ["🧪 Test", "✍️ Yozma ish", "📈 Loyiha"],
        btnText: "Baholash jadvalini ko‘rish",

    },
]

export const NewHomeAssessment = () => {

    const [active, setActive] = useState(boxes[1])
    const boxRefs = useRef([]);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const containerRef = useRef(null);
    useGSAP(() => {
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
                end: "bottom 75%",
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
                end: "bottom 75%",

                scrub: 1,
                toggleActions: "play none none reverse",
            },
            x: 100,
            opacity: 0,
            delay: 0.3,
            duration: 1,
            ease: "power3.out"
        });

        boxRefs.current.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
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
        return boxes.map((item , index) => (

            <div  ref={el => boxRefs.current[index] = el} style={{background: active?.id === item.id ? "rgba(7, 46, 146, 1)" : ""}} onClick={() => setActive(item?.id === active?.id ? null : item)} className={cls.assessment__wrapper_box}>
                <div style={{color: active?.id === item.id ? "white" : ""}} className={cls.assessment__wrapper_box_title}>
                    {item.title}
                </div>
                <div style={{color: active?.id === item.id ? "white" : ""}} className={cls.assessment__wrapper_box_date}>
                    {item.date}
                </div>
                <ul>
                    {item.list.map(itemList => <li style={{color: item.id === active?.id ? "#fff" : "rgba(69, 69, 69, 1)"}}>{itemList}</li>)}
                </ul>
                <HomeBtnUi type={item.id === active?.id ? "downloadWhite" : "download"} children={item.btnText}/>
            </div>

        ))
    }

    return (
        <div className={cls.assessment} id={"exams"} ref={containerRef}>

            <div className={cls.assessment__header}>
                <div ref={titleRef} className={cls.assessment__header_left}>
                    <span>O‘quvchilarni baholash</span>bosqichlari
                </div>
                <div ref={descRef} className={cls.assessment__header_right}>Har bir chorak oxirida test, yozma ish va loyiha asosida
                    oraliq baholash o‘tkaziladi. Yillik yakuniy baho o‘quvchining chorak davomida to‘plagan natijalari
                    asosida shakllanadi. Yuqori sinflarda esa xalqaro baholashlar — IELTS, STEAM loyihalari va fan
                    olimpiadalari orqali bilim va ko‘nikmalar baholanadi.
                </div>
            </div>

            <div className={cls.assessment__wrapper}>
                {renderItem()}
            </div>


        </div>
    );
};

