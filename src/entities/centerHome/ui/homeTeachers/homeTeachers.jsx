import cls from "entities/centerHome/ui/homeTeachers/homeTeachers.module.sass"
import profileTeacher from "shared/assets/images/login-page-4468581-3783954 1.svg"
import profileImg from "shared/assets/images/best-shirts-men 1.svg"
import img1 from "shared/assets/images/Rectangle 869.svg"
import img3 from "shared/assets/images/photo_2023-11-22_16-32-58.jpg"
import img4 from "shared/assets/images/photo_2023-11-22_16-30-42.jpg"
import React, {useContext, useEffect, useRef} from 'react';
import Slider from 'react-slick';
import {Context} from "pages/homePage/ui/CenterHomePage/CenterHomePage";
const teachersData = [
    {name: "sardor" , surname: 'ikromov' , teacherSubject: "english" , teacherStatus:  profileTeacher},
    {name: "sardor" , surname: 'ikromov' , teacherSubject: "english" , teacherStatus:  img3},
    {name: "sardor" , surname: 'ikromov' , teacherSubject: "english" , teacherStatus:  profileImg},
    {name: "sardor" , surname: 'ikromov' , teacherSubject: "english" , teacherStatus:  img1},
    {name: "sardor" , surname: 'ikromov' , teacherSubject: "english" , teacherStatus:  img4},
]

export function HomeTeachers() {
    const {setSectionTop} = useContext(Context)

    const sectionRef = useRef()

    useEffect(() => {
        setSectionTop(cur => ({...cur, teacher: sectionRef?.current?.offsetTop}))
    }, [setSectionTop])


    const settings = {
        infinite: true ,
        focusOnSelect: true,
        dots: true,
        speed: 600,
        slidesToShow: 4,
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
                breakpoint: 930,
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
  return(
      <div className={cls.teachers} ref={sectionRef}>
            <Slider {...settings}>
                {teachersData.map((item) =>{
                    return(
                        <div className={cls.teachers__box}>
                            <div className={cls.teachers__box_img}>
                                <img src={item.teacherStatus} alt=""/>
                            </div>
                            <div className={cls.teachers__box_title}>
                                <div className={cls.teachers__box_info}>
                                    {item.name} {item.surname}
                                </div>
                                <div className={cls.teachers__box_subject}>
                                    {item.teacherSubject}
                                </div>

                            </div>
                            <div className={cls.teachers__box_socialNetworks}>
                                <i className="fa-brands fa-telegram"/>
                                <i className={"fa-brands fa-instagram"}/>
                                <i className={"fa-brands fa-facebook"}/>
                            </div>
                        </div>
                    )
                })}

            </Slider>

      </div>
  )
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none",}}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none",}}
            onClick={onClick}
        />
    );
}