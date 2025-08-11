import React, {useState} from 'react';
import {Outlet, Route, Routes} from "react-router";

import {AboutUs, SchoolHomeHeader, SchoolHomeWorkUs, SchoolParentesComment} from "entities/schoolHome";
import {HomeContext} from "shared/lib/context/homeContext";
import {SchoolHomePage} from "../SchoolHomePage/SchoolHomePage";
import {SchoolHomeEducationPage} from "../SchoolHomePage/SchoolHomeEducationPage";
import {
    SchoolGalleryModal,
    SchoolHomeCurriculamModal,
    SchoolHomeLatestNewModal, SchoolHomeNewsAnnouncementModal,
    SchoolHomeStudentProfileModal, SchoolHomeStudentsModal
} from "../../../../features/schoolHome";

export const NewSchoolHomePage = () => {

    const [sectionTop, setSectionTop] = useState({
        aboutUs: null,
        principalsSpotlight: null,
        studentProfile: null,
        teachingStaff: null,
        curricular: null,
        co_curricular: null,
        extra_curricular: null,
        academic_calendar: null,
        our_students: null,
        academic_champions: null,
        student_clubs: null,
        student_council: null,
    })

    return (
        <HomeContext.Provider value={{sectionTop, setSectionTop}}>
            <div style={{width: "100%", position: "relative"}}>
                <SchoolHomeHeader/>
                <Outlet/>
                <Routes>

                        <Route index path={"/"} element={<SchoolHomePage/>}/>
                        <Route element={<AboutUs/>} path={"aboutUs"}/>
                        <Route element={<SchoolParentesComment/>} path={"testimonial"}/>
                        <Route element={<SchoolHomeWorkUs/>} path={"workwithus"}/>
                        <Route element={<SchoolHomeEducationPage/>} path={"education"}/>
                        <Route element={<SchoolHomeLatestNewModal/>} path={"news"}/>
                        <Route element={<SchoolHomeCurriculamModal/>} path={"curricular"}/>
                        <Route element={<SchoolGalleryModal/>} path={"gallery"}/>
                        <Route element={<SchoolHomeStudentProfileModal/>} path={"studentLife"}/>
                        <Route element={<SchoolHomeNewsAnnouncementModal/>} path={"news_announcement"}/>
                        <Route element={<SchoolHomeStudentsModal/>} path={"students"}/>

                </Routes>
            </div>
        </HomeContext.Provider>
    );
}
