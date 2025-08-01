import cls from "entities/centerHome/ui/homeHeader/homeHeader.module.sass"
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import classNames from "classnames";
import {Button} from "shared/ui/button";
// import {motion} from "framer-motion";
import headerImg from "shared/assets/images/logo.svg"
import {Context} from "pages/homePage/ui/CenterHomePage/CenterHomePage";
import {useNavigate} from "react-router";


export const HomeHeader = ({status, setStatus}) => {
    const {sectionTop} = useContext(Context)



    const [activeItem, setActiveItem] = useState("home")
    const [activeBar, setActiveBar] = useState(false)

    const menuList = [
        {
            name: "home",
            title: "Bosh sahifa",
            type: "btn",

        },
        {
            name: "about",
            title: "Biz haqimizda",
            type: "btn"
        },
        {
            name: "course",
            title: "Kurslar",
            type: "btn"
        },
        {
            name: "result",
            title: "Natijalar",
            type: "btn"
        },
        {
            name: "teacher",
            title: "O’qituvchilar",
            type: "btn"
        },
        {
            name: "news",
            title: "Yangiliklar",
            type: "btn"
        },
        {
            name: "advantages",
            title: "Afzallilar",
            type: "btn"
        },
        {
            name: "books",
            title: "Kitoblar",
            type: "link",
            href: "/books"
        },
        {
            name: "consulting",
            title: "Consulting",
            type: "link",
            href: "/"
        },
        {
            name: "contact",
            title: "Bog’lanish",
            type: "btn"
        }
    ]

    const toLink = (top) => {

        setActiveBar(false)
        window.scrollTo(0, top - 100)
    }
    const renderMenu = (arr) => {
        return (
            <ul className={cls.header__menuItems}>
                {
                    arr?.map((item, i) => {
                        if (item.type === "link") {
                            return (
                                <li
                                    className={classNames(cls.header__item, {
                                        [cls.active]: activeItem === item.name
                                    })}
                                >
                                    <Link
                                        to={item.href}
                                        style={{
                                            textDecoration: "none",
                                            color: "#686868"
                                        }}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        }
                        return (
                            <li
                                className={classNames(cls.header__item, {
                                    [cls.active]: activeItem === item.name
                                })}
                                key={i}
                                onClick={() => {
                                    toLink(sectionTop[item.name])
                                    setActiveItem(item.name)

                                }}
                            >
                                {item.title}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }


    return (
        <div className={cls.header}>
            <HeaderPc
                children={renderMenu(menuList)}
                setActiveBar={setActiveBar}
                activeBar={activeBar}
                status={status}/>
        </div>
    );
};


const HeaderPc = ({status, activeBar, setActiveBar, children}) => {
    return (
        <header className={classNames(cls.header, {
            [cls.active]: status
        })}>
            <div className={cls.header__hamburger}>
                <i
                    className={classNames(
                        activeBar ? "fas fa-times" : "fas fa-bars", cls.header__icon
                    )}
                    onClick={() => setActiveBar(!activeBar)}
                />
            </div>
            <div
                className={classNames(cls.header__menu, {
                    [cls.active]: activeBar
                })}
            >
                <div className={classNames(cls.header__menuInner, {
                    [cls.active]: activeBar
                })}>
                    <div className={cls.header__logo}>
                        <img
                            src={headerImg}
                            alt=""
                        />
                    </div>
                    {children}
                </div>
            </div>
            <Link
                to={'/login'}
                style={{cursor: "pointer"}}
            >
                <Button>Login</Button>
            </Link>
        </header>
    )
}
