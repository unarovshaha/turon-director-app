import cls from "./newHomeClubs.module.sass"
import club1 from "shared/assets/images/clubs1.png"
import club2 from "shared/assets/images/clubs2.png"
import club3 from "shared/assets/images/clubs3.png"
import club4 from "shared/assets/images/clubs4.png"
import club5 from "shared/assets/images/clubs5.png"
import club6 from "shared/assets/images/clubs6.png"
import club7 from "shared/assets/images/clubs7.png"
import club8 from "shared/assets/images/clubs8.png"
import footer1 from "shared/assets/images/club_footer1.png"
import footer2 from "shared/assets/images/club_footer2.png"
import footer3 from "shared/assets/images/club_footer3.png"
import footer4 from "shared/assets/images/club_footer4.png"


const renderItem = [
    {
        image: club6,
        title: "Arduino, Lego Mindstorms va avtomatlashtirish bo‘yicha amaliy bellashuvlar.",
        desc: " 👉 Innovatsion loyihalar orqali texnologiyaga qiziqish yanada ortmoqda.",
        subtitle: "🤖  Robototexnika turnirlari"
    },
    {
        image: club7,
        title: "Yengil atletika, futbol, basketbol va shaxmat musobaqalarida faol ishtirok.",
        desc: "👉 Harakat, raqobat va jamoaviylik — sog‘lom o‘sish yo‘li.",
        subtitle: "🏃‍♀️ 3. Sport bellashuvlari"
    },
    {
        image: club8,
        title: "O‘quvchilarning nutq, hikoya yozish va drama sahnalashtirish bo‘yicha muvaffaqiyatlari.",
        desc: "👉 Tasavvur va so‘z kuchi orqali o‘zini erkin ifoda qilish imkoniyati.",
        subtitle: "📝 4. Insho va ijodiy tanlovlar"
    }
]


const renderFooterItem = [
    {
        image: footer1,
        title: "Gulnoza Hamroyeva",
        desc: "12 yillik tajriba. STEAM va laboratoriya tajribalar bo‘yicha mutaxassis.",
        subtitle: "Biologiya o‘qituvchisi"
    },
    {
        image: footer2,
        title: "Olimjon Qodirov",
        desc: "Fizikani hayotiy misollar orqali o‘rgatadi. Zamonaviy metodlar ishlatadi.",
        subtitle: "Fizika o‘qituvchisi"
    },
    {
        image: footer3,
        title: "Nargiza Soliyeva",
        desc: "20+ yillik tajriba. Maktab boshqaruvi va innovatsiyalar yo‘nalishida yetakchi.",
        subtitle: "Direktor"
    },
    {
        image: footer4,
        title: "Anvar Rustamov",
        desc: "Arduino, Python va LEGO texnologiyalari bo‘yicha trener.",
        subtitle: "Robototexnika mentori"
    },
    {
        image: footer4,
        title: "Anvar Rustamov",
        desc: "Arduino, Python va LEGO texnologiyalari bo‘yicha trener.",
        subtitle: "Robototexnika mentori"
    },

]

export const NewHomeClubs = () => {

    const render = () => {
        return renderItem.map(item => (
            <div className={cls.club__competitions__wrapper_right_box}>
                <div className={cls.club__competitions__wrapper_right_box_img}>
                    <img src={item.image} alt=""/>
                    <div>
                        {item.subtitle}
                    </div>
                </div>
                <div className={cls.club__competitions__wrapper_right_box_text}>
                    <h2 className={cls.club__competitions__wrapper_right_box_text_title}>
                        {item.title}

                    </h2>
                    <span className={cls.club__competitions__wrapper_right_box_text_desc}>{item.desc}</span>
                    <span className={cls.club__competitions__wrapper_right_box_text_link}>Batafsil</span>
                </div>
            </div>
        ))
    }


    const renderFooter = () => {
        return renderFooterItem.map(item => (
            <div className={cls.student__wrapper_box}>

                <div className={cls.student__wrapper_box_img}>
                    <img src={item.image} alt=""/>
                </div>
                <div className={cls.student__wrapper_box_text}>
                    <h2 className={cls.student__wrapper_box_text_title}>{item.title}</h2>
                    <span className={cls.student__wrapper_box_text_subtitle}>{item.subtitle}</span>
                    <span className={cls.student__wrapper_box_text_desc}>{item.desc}</span>

                </div>
            </div>
        ))
    }

    return (
        <div className={cls.club}>
            <div className={cls.club__header} id={"clubs_and_activities"}>
                <div className={cls.club__header_text}>
                    <div className={cls.club__title}>
                        <div className={cls.club__title_text}>Clubs & Activities {window.innerWidth < 950 ? "darsdan" : ""}</div> {window.innerWidth >= 950 ? "darsdan" : ""} tashqari <span>hayot markazi</span>
                    </div>
                    <div className={cls.club__title_desc}>
                        Turon Xalqaro Maktabi o‘quvchilari sinfdan tashqarida ham o‘z qiziqishlari va iste’dodlarini
                        rivojlantirish uchun turli to‘garaklar va klublarda ishtirok etadilar.
                    </div>
                </div>
                <div className={cls.club__header_img}>
                    <div><img src={club1} alt=""/></div>
                    <div><img src={club2} alt=""/></div>
                </div>
            </div>
            <div className={cls.club__sport} id={"sports_and_arts"}>
                <div className={cls.club__sport_text}>
                    <div className={cls.club__sport_title}>
                        <span className={cls.club__sport_title_text}>Sports & Arts — harakat</span> <span>ijod uyg‘unligi</span>
                    </div>
                    <div className={cls.club__sport_title_desc}>
                        Turon Xalqaro Maktabi o‘quvchilari nafaqat a’lochi, balki sog‘lom, faol va ijodkor shaxs
                        sifatida shakllanadilar. Sport mashg‘ulotlari orqali jismoniy sog‘lik, jamoaviylik va intizom
                        rivojlansa, san’at darslari orqali estetik did, tasavvur va o‘z ifodasini topish ko‘nikmalari
                        mustahkamlanadi.
                    </div>
                </div>
                <div className={cls.club__sport_img}>
                    <img src={club3} alt=""/>
                </div>
            </div>
            <div className={cls.club__trips} id={"school_trips"}>
                <div className={cls.club__trips_img}>
                    <img src={club4} alt=""/>
                </div>
                <div className={cls.club__trips_text}>
                    <div className={cls.club__trips_title}>
                        <span className={cls.club__trips_title_text}>Sports & Arts — harakat</span> <span>ijod uyg‘unligi</span>
                    </div>
                    <div className={cls.club__trips_title_desc}>
                        Turon Xalqaro Maktabi o‘quvchilari nafaqat a’lochi, balki sog‘lom, faol va ijodkor shaxs
                        sifatida shakllanadilar. Sport mashg‘ulotlari orqali jismoniy sog‘lik, jamoaviylik va intizom
                        rivojlansa, san’at darslari orqali estetik did, tasavvur va o‘z ifodasini topish ko‘nikmalari
                        mustahkamlanadi.
                    </div>
                </div>
            </div>


            <div className={cls.club__competitions} id={"competitions"}>
                <div className={cls.club__competitions_header}>
                    <div className={cls.club__competitions_header_title}>
                        Musobaqalar bizni kuchliroq va aqlliroq qiladi
                    </div>
                    <div className={cls.club__competitions_header_desc}>
                        Biz o‘quvchilarimizni nafaqat darsda, balki hayotda ham g‘olib bo‘lishga tayyorlaymiz. Tanlovlar
                        va bellashuvlar orqali ular o‘zlarining bilimlarini amaliyotga tatbiq etadilar va jamoaviy ruhda
                        o‘sadilar
                    </div>
                </div>

                <div className={cls.club__competitions__wrapper}>
                    <div className={cls.club__competitions__wrapper_left}>
                        <img className={cls.club__competitions__wrapper_left_img} src={club5} alt=""/>

                        <div className={cls.club__competitions__wrapper_left_subTitle}>
                            📚 Fan olimpiadalari
                        </div>
                        <div className={cls.club__competitions__wrapper_left_text}>
                            <div className={cls.club__competitions__wrapper_left_title}>
                                Biologiya, Matematika, Fizika bo‘yicha mintaqaviy va xalqaro darajadagi tanlovlar.
                            </div>
                            <div className={cls.club__competitions__wrapper_left_desc}>
                                👉 O‘quvchilarimiz aniq fanlar bo‘yicha chuqur bilim va mantiqiy fikrlash ko‘nikmalarini
                                namoyon etib, yuqori natijalarga erishishmoqda.
                            </div>
                            <div className={cls.club__competitions__wrapper_left_link}>
                                Batafsil
                            </div>
                        </div>
                    </div>
                    <div className={cls.club__competitions__wrapper_right}>
                        {render()}
                    </div>
                </div>
            </div>


            <div className={cls.student} id={"student_council"}>
                <div className={cls.student__header}>
                    <div className={cls.student__header_text}>
                        <div className={cls.student__header_text_title}>Student Council liderlik</div>
                        ilk qadamlardan
                    </div>
                    <div className={cls.student__header_desc}>
                        Turon Xalqaro Maktabining Student Council’ida o‘quvchilar tadbirlar tashkillashtiradi, o‘z
                        sinfdoshlarining manfaatlarini ifoda etadi va maktab hayotida faol ishtirok etadi. Bu jarayon
                        ularning liderlik va jamoaviy ish ko‘nikmalarini rivojlantiradi.
                    </div>
                </div>

                <div className={cls.student__wrapper}>
                    {renderFooter()}
                </div>
            </div>

        </div>
    );
};

