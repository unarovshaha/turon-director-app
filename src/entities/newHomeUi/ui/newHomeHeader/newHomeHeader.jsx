import newLogo from "shared/assets/logo/Frame 2147223283.svg";
import newLogoBlue from "shared/assets/logo/turonLogoBlue.svg";
import hamburger from "shared/assets/icons/hamburger.svg";
import whiteHamburger from "shared/assets/icons/whitehamburger.svg";
import cls from "./newHomeUi.module.sass";
import {useEffect, useMemo, useState} from "react";
import classNames from "classnames";
import {HomeBtnUi} from "shared/ui/homeBtnUi/homeBtnUi";

import {useLocation, useNavigate} from "react-router";
import LangSwitcher from "features/langSwitcher/ui/LangSwitcher";
import {useTranslation} from "react-i18next";



export const NewHomeHeader = () => {
    const { t, i18n } = useTranslation();

    const headerList = useMemo(() => [
        {
            id: 1,
            title: t("homeHeader.home"),
            url: "/",
            path: [
                { title: t("homeHeader.homepage"), path: "homepage" },
                { title: t("homeHeader.events"), path: "events" },
                { title: t("homeHeader.slider"), path: "slider" },
                { title: t("homeHeader.quickLinks"), path: "quickLinks" },
            ],
        },
        {
            id: 2,
            title: t("homeHeader.about"),
            url: "/about",
            path: [
                { title: t("homeHeader.introduction"), path: "introduction" },
                { title: t("homeHeader.missions"), path: "missions" },
                { title: t("homeHeader.coreValues"), path: "coreValues" },
                { title: t("homeHeader.schoolLife"), path: "schoolLife" },
                { title: t("homeHeader.parentsComment"), path: "parentsComment" },
                { title: t("homeHeader.fileDownload"), path: "fileDownload" },
            ],
        },
        {
            id: 3,
            title: t("homeHeader.admission"),
            url: "/admissions",
            path: [
                { title: t("homeHeader.payment"), path: "payment" },
                { title: t("homeHeader.calendar"), path: "calendar" },
                { title: t("homeHeader.question"), path: "question" },
            ],
        },
        {
            id: 5,
            title: t("homeHeader.team"),
            url: "/faculty",
        },
        {
            id: 4,
            title: t("homeHeader.education"),
            url: "/academics",
            path: [
                { title: t("homeHeader.curriculum"), path: "curriculum" },
                { title: t("homeHeader.subjects"), path: "subjects" },
                { title: t("homeHeader.academicCalendar"), path: "calendar" },
                { title: t("homeHeader.grading"), path: "grading" },
                { title: t("homeHeader.exams"), path: "exams" },
            ],
        },
        {
            id: 6,
            title: t("homeHeader.life"),
            url: "/student_life",
            path: [
                { title: t("homeHeader.clubs"), path: "clubs_and_activities" },
                { title: t("homeHeader.sports"), path: "sports_and_arts" },
                { title: t("homeHeader.trips"), path: "school_trips" },
                { title: t("homeHeader.competitions"), path: "competitions" },
                { title: t("homeHeader.studentCouncil"), path: "student_council" },
            ],
        },
        {
            id: 8,
            title: t("homeHeader.contact"),
            url: "/contact",
        },
    ], [i18n.language, t]);
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const [active, setActive] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const [activePath, setActivePath] = useState(null);
    const [activeFormTitle, setActiveFormTitle] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (activePath?.path?.length > 0 && !activeFormTitle) {
            setActiveFormTitle(activePath.path[0].title);
        }
    }, [activePath, activeFormTitle]);



    const handleMainClick = (item) => {
        navigate(item.url);
        setActiveMenu(false)

        if (item.id) {
            if (active === item.id) {
                setActive(null);
                setActivePath(null);
            } else {
                setActive(item.id);
                setActivePath(item);
                if (!activeFormTitle || !item?.path?.some(sub => sub.title === activeFormTitle)) {
                    setActiveFormTitle(item.path?.[0]?.title || null);
                }

            }
        } else {
            setActivePath(item);
            if (!activeFormTitle || !item?.path?.some(sub => sub.title === activeFormTitle)) {
                setActiveFormTitle(item.path?.[0]?.title || null);
            }
        }
    };

    const handleSubItemClick = (e, subItem) => {
        e.stopPropagation();
        setActiveFormTitle(subItem.title);

        if (window.innerWidth > 1050) {
            setActive(null);
            setActivePath(null);
        }

        setActiveMenu(false);

        const section = document.querySelector(`#${subItem.path}`);
        if (section) {
            const yOffset = -150;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: "smooth"});
            window.history.pushState(null, "", `#${subItem.path}`);
        }
    };

    const renderList = () =>
        headerList.map((item) => {
            const isActive = active === item.id;
            return (
                <>
                    <li
                        key={item.id || item.title}
                        onClick={() => handleMainClick(item)}
                        className={classNames({[cls.active]: isActive})}
                    >
                        {item.title}
                        {item.path && <i className={`fa-solid fa-chevron-${isActive ? "up" : "down"}`}/>}

                        {item?.id === activePath?.id && activePath?.path  && (
                            <div
                                style={{bottom: `${item?.path?.length * -2.2}rem`}}
                                className={classNames(cls.popup, {
                                    [cls.popup_active]: item?.id === activePath?.id,
                                    [cls.popup_unactive]: !activePath?.path,
                                })}
                            >
                                <ul>
                                    {activePath?.path?.map((subItem) => (
                                        <li
                                            key={subItem.title}
                                            className={classNames({
                                                [cls.active]: activeFormTitle === subItem.title,
                                            })}
                                            onClick={(e) => handleSubItemClick(e, subItem, item)}
                                        >
                                            {subItem.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>

                </>
            );
        });

    return (
        <div className={classNames(cls.header, {[cls.scrolled]: scrolled})}>
            <div className={cls.header__logo}>
                <img src={scrolled ? newLogoBlue : newLogo} alt="turon-logo"/>
            </div>

            <ul className={classNames(cls.header__list, {[cls.scrolledActive]: scrolled})}>
                {renderList()}
            </ul>

            <div className={classNames(cls.header__btns)}>

                <HomeBtnUi extraClass={cls.contact} onClick={() => navigate("/login")} type="request">{t("homeHeader.apply")}</HomeBtnUi>
                <LangSwitcher type={"home"} extraClass={scrolled ? "" : cls.header__lang}/>
                <div onClick={() => setActiveMenu(!activeMenu)} className={cls.header__burger}>
                    <img src={scrolled ? whiteHamburger : hamburger} alt="menu"/>
                </div>
            </div>

            <div className={classNames(cls.activeMenu, {[cls.activeMenuBc]: activeMenu})}>
                <ul className={classNames(cls.activeMenu__list, {[cls.activeMenuActive]: activeMenu})}>
                    {headerList.map((item) => (
                        <>
                            <li
                                key={item.id}
                                onClick={() => handleMainClick(item)}
                                className={classNames({[cls.activeList]: active === item.id})}
                            >
                                {item.title}
                                {item.path &&
                                    <i className={`fa-solid fa-chevron-${active === item.id ? "up" : "down"}`}/>}
                            </li>
                            {!!item.path && (
                                <div
                                    className={classNames(cls.popup_mobile, {
                                        [cls.popup_active_mobile]: item?.id === activePath?.id,
                                        [cls.popup_unactive_mobile]: !activePath?.path,
                                    })}
                                >
                                    <ul>
                                        {item.path.map((subItem) => (
                                            <li
                                                key={subItem.title}
                                                className={classNames({
                                                    [cls.active]: activeFormTitle === subItem.title,
                                                })}
                                                onClick={(e) => handleSubItemClick(e, subItem, item)}
                                            >
                                                {subItem.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </>
                    ))}
                </ul>
            </div>

        </div>
    );
};
