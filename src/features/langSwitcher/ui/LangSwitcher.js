import React, {useState} from 'react';


import cls from "./langSwitcher.module.sass"

import arrowDown from "shared/assets/icons/Trailing element-selected.svg"
import arrowDownNigga from "shared/assets/icons/niggaDown.svg"
import lang from "shared/assets/icons/language.svg"

import langNigga from "shared/assets/icons/nigga.svg"
import {useTranslation} from "react-i18next";
import langEn from "shared/assets/icons/940156.png"
import UzbSvg from "shared/assets/icons/twemoji_flag-uzbekistan.svg"
import RusSvg from "shared/assets/icons/fxemoji_russianflag.svg"
import classNames from "classnames";


const langs = [
    {
        value: "uz",
        label: "Uz",
        icon: UzbSvg
    },
    {
        value: "ru",
        label: "Ru",
        icon: RusSvg
    },
]
const extraLangs = [
    {
        value: "uz",
        label: "Uz",
        icon: UzbSvg
    },
    {
        value: "ru",
        label: "Ru",
        icon: RusSvg
    },
    {
        value: "en",
        label: "En",
        icon: langEn
    },
]

const LangSwitcher = ({extraClass , type}) => {

    const {t, i18n} = useTranslation();

    const [active, setActive] = useState(false)
    const [activeLang,setActiveLang] = useState("Uz")

    console.log("dasd")

    const onChangeLanguage = (type) => {
        i18n.changeLanguage(type.value)
        setActive(false)
        setActiveLang(type.label)
    }


    return (
        <div className={classNames(cls.switcher)}>

            <div className={classNames(cls.switcher__lang , extraClass)} onClick={() => setActive(!active)}>
                <img src={extraClass ? langNigga : lang} alt=""/>
                <span>{activeLang}</span>
                <img src={extraClass ? arrowDownNigga : arrowDown} alt=""/>
            </div>

            <div
                className={classNames(cls.switcher__popup, {[cls.active]: active})}
            >
                {
                    type !== "home" ? langs.map((item, index) => {
                        return (
                            <div key={index} onClick={() => onChangeLanguage(item)} className={cls.item}>
                                <img src={item.icon} alt=""/>
                                <span>{item.label}</span>

                            </div>
                        )
                    }) : extraLangs.map((item, index) => {
                        return (
                            <div key={index} onClick={() => onChangeLanguage(item)} className={cls.item}>
                                <img src={item.icon} alt=""/>
                                <span>{item.label}</span>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default LangSwitcher;