import React, {useEffect, useState} from 'react';

import {
    Home,
    Course,
    Contact,
    Results,
    HomeNews,
    HomeAbout,
    HomeHeader,
    HomeTeachers,
    HomeAdvantages,
} from "entities/centerHome";

import cls from "./CenterHomePage.module.sass"
import WebSiteLoader from "shared/ui/webSiteLoader/webSiteloader";
import {useSelector} from "react-redux";



export const Context = React.createContext()

export const CenterHomePage = () => {
    const [loading, setLoading] = useState(true)



    const [sectionTop, setSectionTop] = useState({
        home: null,
        about: null,
        advantages: null,
        comments: null,
        events: null,
        gallery: null,
        contact: null
    })


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 6000)

        return () => clearTimeout(timer)
    }, [])

    return (

        <>
            {loading ? (
                <WebSiteLoader/>

            ) : (
                <Context.Provider value={{setSectionTop, sectionTop}}>
                    <div className={cls.homeMain}>
                        <HomeHeader/>
                        <Home/>
                        <HomeAbout/>
                        <Course/>
                        <Results/>
                        <HomeTeachers/>
                        <HomeNews/>
                        <HomeAdvantages/>
                        <Contact/>
                    </div>
                </Context.Provider>
            )
            }

        </>


    );
};
