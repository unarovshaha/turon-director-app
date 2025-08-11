import cls from "./newHomeContact.module.sass"
import {useState} from "react";
import classNames from "classnames";
import phone from "shared/assets/icons/ic_baseline-phone.svg"
import telegram from "shared/assets/icons/telegramContact.svg"


const locations = [

    {name: "Xo’jakent"},
    // {name: "Gazalkent"},
    {name: "Sergili"},
    {name: "chirchiq"},
]
export const NewHomeContact = () => {

    const [selectedItem, setSelectedItem] = useState(locations[0].name)







    function compareById(a, b) {
        return a.id - b.id;
    }

    const renderInfo = () => {
        switch (selectedItem) {
            case "chirchiq" :
                return (
                    <>
                        <div className={cls.contact__branches_info_box}>
                            <div className={cls.contact__branches_info_box_title}>
                                Chirchiq
                            </div>
                            <div className={cls.contact__branches_info_box_phone}>

                                <img src={phone} alt=""/>  99 050 33 36
                            </div>
                            <div className={cls.contact__branches_info_box_phone}>

                                <img src={telegram} alt=""/>  @Turon maktabi
                            </div>

                        </div>
                    </>
                )
                break
            case "Xo’jakent" :
                return (
                    <>
                        <div className={cls.contact__branches_info_box}>
                            <div className={cls.contact__branches_info_box_title}>
                                Xo’jakent
                            </div>
                            <div className={cls.contact__branches_info_box_phone}>

                                <img src={phone} alt=""/>  99 476 33 36
                            </div>
                            <div className={cls.contact__branches_info_box_phone}>

                                <img src={telegram} alt=""/>  @Turon maktabi
                            </div>

                        </div>
                    </>
                )
                break
            case "Sergili" :
                return (
                    <>
                        <div className={cls.contact__branches_info_box}>
                            <div className={cls.contact__branches_info_box_title}>
                                Sergili
                            </div>
                            <div className={cls.contact__branches_info_box_phone}>

                                <img src={phone} alt=""/>  94 310 33 33
                            </div>
                            <div className={cls.contact__branches_info_box_phone}>

                                <img src={telegram} alt=""/>  @Turon maktabi
                            </div>

                        </div>
                    </>
                )
                break
        }
    }
    const renderMaps = () => {
        switch (selectedItem) {
            case "chirchiq" :
                return <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.6208757171587!2d69.59200527278249!3d41.47180846473949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aefd001d09a3fb%3A0x3defb64edb2164f6!2sTuron%20Xalqaro%20Maktabi!5e1!3m2!1sru!2s!4v1733480085201!5m2!1sru!2s"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
                break
            case "Sergili" :
                return <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6002.598757406476!2d69.21117262052368!3d41.215245940243776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61ab41db49f1%3A0x889c9f788b1c7aea!2sTuron%20xalqaro%20maktabi!5e0!3m2!1sru!2s!4v1733480259416!5m2!1sru!2s"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                break
            case "Xo’jakent" :
                return <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1029.630900409872!2d69.94854717827091!3d41.635367929634334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38af16a418831869%3A0x7cc9a20b5cbc2070!2s16-o&#39;rta%20maktab!5e1!3m2!1sru!2s!4v1733480158809!5m2!1sru!2s"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                break
        }
    }


    return (
        <div className={cls.contact}>

            <div className={cls.contact__wrapper}>


                    <div className={classNames(cls.contact__branches)}>




                        <ul>
                            <h2 className={cls.contact__branches_title}>Bizning filiallarimiz</h2>
                            <hr className={cls.contact__branches_hr}/>
                            {selectedItem && [...locations].sort(compareById).map((item) => {
                                return (
                                    <li onClick={() => {
                                        setSelectedItem(item.name)
                                    }} className={classNames({
                                        [cls.active_list]: item.name === selectedItem
                                    })}>

                                        {item.name}
                                    </li>
                                )
                            })}
                        </ul>
                        <div className={cls.contact__branches_info}>
                            {renderInfo()}
                        </div>
                    </div>



                <div className={cls.contact__locations}>
                    <div className={cls.contact__locations_maps}>

                        {renderMaps()}
                    </div>

                </div>


            </div>
        </div>
    )
}