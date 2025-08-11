// import React from "react";
// import Slider from "react-slick";
// import Slick from "slick-carousel"
//
//
import cls from "entities/centerHome/ui/homeResults/results.module.sass"
import resultsImg from "shared/assets/images/2024-07-09_225505.png"
import profileImg from "shared/assets/images/best-shirts-men 1.svg"
import React, {useContext, useEffect} from 'react';
import Slider from 'react-slick';


import {useRef} from "react";
import {Context} from "pages/homePage/ui/CenterHomePage/CenterHomePage";

//
//
const resultsData = [
    {
        resultsInfo: "html",
        resultsImg: resultsImg,
        profileImg: profileImg,
        teacherName: "begzod",
        teacherSurname: "jumaniyozov",
        studentName: "sardor1",
        studentSurname: "ikromov"
    },
    {
        resultsInfo: "html",
        resultsImg: resultsImg,
        profileImg: profileImg,
        teacherName: "begzod",
        teacherSurname: "jumaniyozov",
        studentName: "sardor2",
        studentSurname: "ikromov"
    },
    {
        resultsInfo: "html",
        resultsImg: resultsImg,
        profileImg: profileImg,
        teacherName: "begzod",
        teacherSurname: "jumaniyozov",
        studentName: "sardor3",
        studentSurname: "ikromov"
    },
    {
        resultsInfo: "html",
        resultsImg: resultsImg,
        profileImg: profileImg,
        teacherName: "begzod",
        teacherSurname: "jumaniyozov",
        studentName: "sardor4",
        studentSurname: "ikromov"
    },
    {
        resultsInfo: "html",
        resultsImg: resultsImg,
        profileImg: profileImg,
        teacherName: "begzod",
        teacherSurname: "jumaniyozov",
        studentName: "sardor5",
        studentSurname: "ikromov"
    },
    {
        resultsInfo: "html",
        resultsImg: resultsImg,
        profileImg: profileImg,
        teacherName: "begzod",
        teacherSurname: "jumaniyozov",
        studentName: "sardor6",
        studentSurname: "ikromov"
    },


]


export function Results() {
    const {setSectionTop} = useContext(Context)

    const sectionRef = useRef()

    useEffect(() => {
        setSectionTop(cur => ({...cur, result: sectionRef?.current?.offsetTop}))
    }, [setSectionTop])


    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        className: cls.slickVertical,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={cls.results} ref={sectionRef} >

            <div>
                <Slider {...settings}>
                    {resultsData.map(item => {
                        return (
                            <div className={cls.results__box}>
                                <div className={cls.results__box_header}>
                                    <div className={cls.results__box_info}>{item.resultsInfo}</div>
                                </div>
                                <div className={cls.results__box_images}>
                                    <div className={cls.results__box_images_profile}>
                                        <img src={item.profileImg} alt=""/>
                                    </div>
                                    <div className={cls.results__box_images_results}>
                                        <img src={item.resultsImg} alt=""/>
                                    </div>
                                </div>
                                <div className={cls.results__box_studentsInfo}>
                                    <div className={cls.results__box_studentsInfo_teacher}>
                                        <i className={"fa fa-user"}></i>
                                        {item.teacherName} {item.teacherSurname}
                                    </div>
                                    <div className={cls.results__box_studentsInfo_student}>
                                        <i className={"fa fa-user-tie"}/>
                                        {item.studentName} {item.studentSurname}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>


        </div>
    );
}


function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "none",}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "none",}}
            onClick={onClick}
        />
    );
}