import React, {memo, useCallback, useMemo, useState} from 'react';
import cls from "./teachers.module.sass"
import {Table} from "shared/ui/table";
import {Link} from "../../../../shared/ui/link";
import {getTeacherLoading} from "../../model/selector/teacherSelector";
import {useSelector} from "react-redux";
import {DefaultPageLoader} from "../../../../shared/ui/defaultLoader";
import {Input} from "../../../../shared/ui/input";
import {getTeachersWithFilter} from "../../model/selector/teacherSelector";

import {useNavigate} from "react-router";

export const Teachers = memo(({data, setSelect, select, theme, onClick , setActiveDelete , setActiveModal}) => {
    const navigation = useNavigate()
    const loadingDef = useSelector(getTeacherLoading)
    const filteredTeachersData = useSelector(getTeachersWithFilter)

    const renderTeachers = () => {
        if (loadingDef) {
            return (
                <DefaultPageLoader/>
            )
        }
        const teachersToRender = filteredTeachersData && filteredTeachersData.length > 0 ? filteredTeachersData : data


        return teachersToRender?.map((item, i) => {
            if (typeof item === "object" && !Array.isArray(item)) {
                return (

                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td onClick={() => navigation(`teacherProfile/${item.id}`)}>{item?.name} {item?.surname}</td>
                        <td>{item?.username}</td>
                        <td>{item?.phone}</td>
                        <td>{item?.age}</td>
                        <td>
                            <div
                                className={item?.subject?.length ? cls.teacher__language : null}>{item?.subject?.map(item =>
                                <p>{item?.name}</p>
                            )}</div>
                        </td>
                    </tr>
                )
            }
        })

    }



    const renderedData = renderTeachers()
    return (
        <>
            <div className={cls.teacher}>

                <div className={cls.table}>
                    <Table>
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Full name</th>
                            <th>Username</th>
                            <th>Tel</th>
                            <th>Yosh</th>
                            <th>Fan</th>
                        </tr>
                        </thead>
                        <tbody>
                        {renderedData}
                        </tbody>

                    </Table>
                </div>
            </div>
        </>

    )
})
