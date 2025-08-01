import cls from "./newHomeUi.module.sass"
import {
    NewHomeCurriculum,
    NewHomeDailyLife,
    NewHomeFileDownload,
    NewHomeHeader,
    NewHomePrincipal,
    NewHomeMain,
     NewHomeClubs, NewHomeGrade, NewHomeAssessment, NewHomeFaculty, NewHomeContact,
    NewHomeAdmissions,

    NewHomeIntroduction,
    NewHomeMission,
    NewHomeCoreValues,
    NewHomeSchoolLife,
    NewHomeParentsComment, NewHomePayment, NewHomeCalendar, NewHomeQuestions
} from "entities/newHomeUi";

import {Route, Routes} from "react-router";
import {Alert} from "features/alert";


export const NewHomeUi = () => {



    return (
        <div className={cls.wrapper}>
            <Alert/>

            {/*<NewHomeHeader/>*/}

            <NewHomeHeader/>

            <div className={cls.wrapper__container}>


                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/student_life"} element={<NewHomeClubs/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/admissions"} element={<Admissions/>}/>
                    <Route path={"/academics"} element={<Academics/>}/>
                    <Route path={"/faculty"} element={<NewHomeFaculty/>}/>
                    <Route path={"/contact"} element={<NewHomeContact/>}/>
                </Routes>

            </div>

        </div>
    );
};

const Home = () => {
    return (
        <>

            <NewHomeMain/>


              <NewHomePrincipal/>


              <NewHomeDailyLife/>
            {/**/}
            {/**/}
            <NewHomeAdmissions/>

        </>
    )
}

const Academics = () => {
    return (
        <>
            <NewHomeCurriculum/>
            <NewHomeGrade/>
            <NewHomeAssessment/>
        </>
    )
}
const About = () => {
    return (
        <>
            <NewHomeIntroduction/>
            <NewHomeMission/>
            <NewHomeCoreValues/>
            <NewHomeSchoolLife/>
            <NewHomeParentsComment/>
            <NewHomeFileDownload/>
        </>
    )
}

const Admissions = () => {
    return (
        <>
            <NewHomePayment/>
            <NewHomeCalendar/>
            <NewHomeQuestions/>
        </>
    )
}



