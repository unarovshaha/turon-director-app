import cls from "entities/centerHome/ui/course/course.module.sass"
import englishStatus from "shared/assets/images/english.status.jfif"
import {Button} from "shared/ui/button";
import {useContext, useEffect, useRef} from "react";
import {Context} from "pages/homePage/ui/CenterHomePage/CenterHomePage";
const subjectData = [
    {name: 'English' , status: englishStatus},
    {name: 'English' , status: englishStatus},
    {name: 'English' , status: englishStatus},
    {name: 'English' , status: englishStatus},
    {name: 'English' , status: englishStatus},
    {name: 'English' , status: englishStatus},
    {name: 'English' , status: englishStatus},
]

export const Course = () => {
    const {setSectionTop} = useContext(Context)

    const sectionRef = useRef()

    useEffect(() => {
        setSectionTop(cur => ({...cur, course: sectionRef?.current?.offsetTop}))
    }, [setSectionTop])

    return (
        <div className={cls.course} ref={sectionRef}>
            <div className={cls.course__wrapper}>
                {subjectData.map(item =>{
                    return(
                       <div className={cls.course__box}>
                           <div className={cls.course__box_img}>
                               <img src={item.status} alt=""/>
                           </div>
                           <div className={cls.course__box_title}>
                               <h2>{item.name}</h2>
                           </div>
                           <div className={cls.course__box_btn}>
                               <Button>
                                   Register
                               </Button>
                           </div>
                       </div>
                    )
                })}
            </div>
        </div>
    );
};

