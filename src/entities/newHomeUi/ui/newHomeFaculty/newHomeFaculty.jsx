import cls from "./newHomeFaculty.module.sass";
import footer1 from "shared/assets/images/club_footer1.png";
import footer2 from "shared/assets/images/club_footer2.png";
import footer3 from "shared/assets/images/club_footer3.png";
import footer4 from "shared/assets/images/club_footer4.png";

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


export const NewHomeFaculty = () => {

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
                    <div className={cls.student__wrapper_box_links}>
                        <div className={cls.student__wrapper_box_links_link}>
                            <i className="fa-brands fa-facebook-f"/>
                        </div>
                        <div className={cls.student__wrapper_box_links_link}>
                            <i className="fa-brands fa-instagram"/>
                        </div>
                    </div>

                </div>

            </div>
        ))
    }

    return (
        <div className={cls.student} id={"faculty"}>
            <div className={cls.student__header}>
                <div className={cls.student__header_left}>
                    <div className={cls.student__header_subTitle}>
                        Bizning jamoa
                    </div>
                    <div className={cls.student__header_title}>
                        Har bir o‘quvchining rivoji kuchli jamoamiz qo‘lida
                    </div>
                </div>
                <div className={cls.student__header_desc}>
                    Turon Xalqaro Maktabi o‘qituvchilari — bu tajribali, o‘z faniga mehr bilan yondashadigan
                    ustozlardir. Har bir a’zo nafaqat dars beradi, balki o‘quvchining shaxsiy rivojini
                    qo‘llab-quvvatlaydi.
                </div>

            </div>

            <div className={cls.student__wrapper}>
                {renderFooter()}
                {renderFooter()}
            </div>


        </div>

    );
};

