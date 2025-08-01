import React, {useEffect, useRef, useState} from 'react';

import {
    SchoolHomeMain,
    SchoolHomeHeader,
    SchoolHomeExtracurricus,
    SchoolHomeCertificats,
    SchoolHomeAboutUs,
    SchoolHomeContact,
    SchoolParentesComment,
    SchoolHomeGallery,
    SchoolHomeWorkUs,
    SchoolNews,
    WorkUs,
    Calendar,
    SchoolHomeContactUs,
    SchoolHomeStudentProfile,
    getSchoolProfileData,
    SchoolHomeLatestNew, SchoolHomeCurricular
} from "entities/schoolHome";

import cls from "./SchoolHomePage.module.sass";
import {Footer} from "../../../../entities/schoolHome/ui/footer/footer";
import {Contact} from "../../../../entities/centerHome";
import {useDispatch, useSelector} from "react-redux";
import {
    SchoolGalleryModal, SchoolHomeCertificatsModal, SchoolHomeContactUsModal,
    SchoolHomeCurriculamModal,
    SchoolHomeLatestEditModal,
    SchoolHomeLatestNewModal, SchoolHomeMainModal,
    SchoolHomeStudentProfileModal
} from "../../../../features/schoolHome";
import {fetchHomePage} from "../../../../entities/schoolHome/model/thunk/getHomePageSelector";
import {getHomePageType} from "../../../../entities/schoolHome/model/selector/getHomePageSelector";
import {getUserJob} from "../../../../entities/profile/userProfile";
import {
    SchoolLeadershipTeamModal
} from "../../../../features/schoolHome/ui/SchoolLeadershipTeamModal/SchoolLeadershipTeamModal";
import {Route, Routes} from "react-router";


export const SchoolHomePage = () => {


    const currentHeight = useRef()
    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState(false)


    const [addLatestNew, setAddLatestNew] = useState(false)


    const types = useSelector(getHomePageType)
    const job = useSelector(getUserJob)

    const dispatch = useDispatch()




    useEffect(() => {
        dispatch(fetchHomePage())
    }, [])

    // const onScroll = (target) => {
    //     console.log(true)
    //     console.log(target.outerHeight, "outerHeight")
    //     console.log(target.offsetHeight, "offsetHeight")
    // }





    return (
        <div
            onWheel={(e) => {
                // console.log(e.y, "e.y")
                // console.log(e.pageY, "e.pageY")
                // console.log(e.deltaY, "e.deltaY")
                // console.log(e.clientY, "e.clientY")
                // console.log(e.offsetY, "e.offsetY")
                // console.log(e.screenY, "e.screenY")
                // onScroll(e.target)
            }}
            className={cls.schoolHome}
        >
            <div
                // onScroll={(e) => onScroll(e.target)}
                className={cls.schoolHome__header}
            >
                {/*<SchoolHomeHeader ref={currentHeight}/>*/}
                <SchoolHomeMainModal types={types}/>

                {/*<SchoolHomeExtracurricus/>*/}
                {/*<SchoolHomeCertificatsModal types={types}/>*/}
                {/*<SchoolHomeCertificats/>*/}
                {/*<SchoolHomeAboutUs/>*/}
                {/*<SchoolGalleryModal types={types}/>*/}
                {/*<SchoolHomeGallery/>*/}
                {/*<SchoolHomeWorkUs/>*/}
                <SchoolHomeContact/>
               <SchoolHomeContactUsModal/>
                {/*<SchoolParentesComment/>*/}
                {/*<SchoolNews/>*/}
                {/*<WorkUs/>*/}
                {/*<Calendar/>*/}
                <Footer/>


                {/*<SchoolHomeCurriculamModal type={types}/>*/}



                    {/*<Route path={"news"} element={<SchoolHomeLatestNewModal types={types}/>}/>*/}




                {/*<SchoolHomeStudentProfileModal types={types}/>*/}


                {/*<SchoolLeadershipTeamModal type={types}/>*/}
            </div>


        </div>
    )
}
