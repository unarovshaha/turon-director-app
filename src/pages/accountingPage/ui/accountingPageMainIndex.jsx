import {
    AccountingAdditionalCosts,
    AccountingBooks,
    AccountingCapitalCosts,
    // AccountingHeader,
    getAccountingSelect,
    StudentsPayments,
    TeachersSalary,
    DebtStudents,
    EmployeeSalary,
    StudentsDiscount,
    getStudentsData, getEmployerSalary, getLoading, accountingReducer, DirectorAccounting
} from "entities/accounting";
import {getPaymentType} from "entities/capital/model/thunk/capitalThunk";





import {Routes, Route, useLocation, Navigate, useMatches, Outlet} from "react-router";
import React, {memo, useCallback, useEffect, useMemo, useState} from "react";
import {getMultiOldLength, getMultiPageData} from "widgets/multiPage/model/selector/multiPageSelector";
import cls from './accountingPageMain.module.sass';

import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {onChangeAccountingPage} from "entities/accounting/model/slice/accountingSlice";
import {Button} from "shared/ui/button";
import {Select} from "shared/ui/select";

import {useHttp} from "shared/api/base";


import {AccountingOtchotPage, EmployerSalaryPage} from "../index";
import {TeacherSalaryPage} from "../index";
import {StudentSalary} from "./accountingPages/studentSalary";
import {Link} from "shared/ui/link";
import {AdditionalCosts} from "./accountingPages/additionalCosts";
import {Capital} from "./accountingPages/capital";
import {
    getAccountingActivePage,
    getAccountingOtchot,
    getEncashment
} from "entities/accounting/model/selector/accountingSelector";
import {accountingThunk} from "entities/accounting/model/thunk/accountingThunk";
import {AccountingFilter} from "features/filters/accountingFilter";
import {MultiPage} from "widgets/multiPage/ui/MultiPage/MultiPage";
import {getBranch} from "features/branchSwitcher";
import {getSelectedLocations, locationsReducer} from "features/locations";
import {getBranchLoading} from "features/branchSwitcher/model/selector/brachSwitcherSelector";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.jsx";
import {fetchMultiPageDataThunk, multiPageReducer} from "widgets/multiPage/index.js";
import {getSelectedLocationsByIds} from "features/locations/model/selector/locationsSelector.js";

const reducers = {
    accountingSlice: accountingReducer,
    multiPageSlice: multiPageReducer,
}


export const AccountingPageMain = () => {
    // let {"*": typePage} = useParams()
    const getAccountingPage = useSelector(getAccountingSelect)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {request} = useHttp()
    const [active, setActive] = useState(false)
    const [activeDel, setActiveDel] = useState(false)
    const [multiPageActive, setMultiPageActive] = useState(false)
    const [oldMultiPageActive, setOldMultiPageActive] = useState(false)
    // const [activePage, setActivePage] = useState(getAccountingPage[0]?.value)
    const encashment = useSelector(getEncashment)
    const activePage = useSelector(getAccountingActivePage)
    const oldLength = useSelector(getMultiOldLength)
    const locations = useSelector(getSelectedLocations)
    const selectedLocations = useSelector(getSelectedLocationsByIds)
    const data = useSelector(getMultiPageData)

    // const {id} = useParams()
    const location = useLocation()

    const [otchot, setOtchot] = useState(false)
    const [oldActivePage, setOldActivePage] = useState(activePage ?? (getAccountingPage?.[0]?.value ?? ""))


    const branch = localStorage.getItem("selectedBranch")

    console.log(data, 'ffff')

    // useEffect(() => {
    //     setPage(typePage)
    // }, [typePage])


    useEffect(() => {
        dispatch(accountingThunk({branchID: branch}))
        dispatch(getPaymentType())
    }, [])

    // useEffect(() => {
    //     if (oldActivePage !== activePage) {
    //         navigate(`${activePage}`)
    //         setOldActivePage(activePage)
    //     } else if (location.search)
    //         navigate(location.search.slice(6, location.search.length))
    //     else if (locations.length < 2)
    //         navigate(`${activePage}`)
    // }, [activePage, navigate, location.pathname, location.search, locations?.length])

    const setPage = useCallback((e) => {
        // setActivePage(e)
        dispatch(onChangeAccountingPage({value: e}))

    }, [navigate])

    const formatSalary = (payment_sum) => {
        return Number(payment_sum).toLocaleString();
    };

    useEffect(() => {

        if (!!oldLength && oldLength !== locations.length && locations.length >= 2) {
            navigate('./', {relative: "path"})
        }
    }, [oldLength, locations?.length])

    // useEffect(() => {
    //     if (locations.length < 2 && typePage)  {
    //         console.log(true, 2)
    //         console.log(locations.length < 2)
    //         console.log(locations.length)
    //         navigate(typePage, {relative: "path"})
    //     }
    // },[locations.length,navigate])

    // useEffect(() => {
    //     console.log(oldMultiPageActive, "oldMultiPageActive")
    //     console.log(multiPageActive, "multiPageActive")
    //     if (multiPageActive !== oldMultiPageActive && locations.length >= 2) {
    //         navigate('../')
    //         setMultiPageActive(false)
    //         setOldMultiPageActive(true)
    //     } else if (!multiPageActive !== oldMultiPageActive && locations.length >= 2) {
    //         setMultiPageActive(true)
    //         setOldMultiPageActive(false)
    //     }
    // }, [locations.length, multiPageActive, oldMultiPageActive])

    // const renderTable = renderTables()

    const types = useMemo(() => [
        {name: "Students Payments", type: "studentsPayments"},
        {name: "Teacher Salary", type: "teachersSalary"},
        {name: "Employer Salary", type: "employeesSalary"},
        {name: "overhead", type: "overhead"},
        {name: "capital", type: "capital"},
    ], [])

    useEffect(() => {
        const data = {
            locations: selectedLocations,
            types
        }
        dispatch(fetchMultiPageDataThunk(data))
    }, [locations.length]);

    console.log(data, 'multi')


    return (
        <DynamicModuleLoader reducers={reducers}>
            <DirectorAccounting data={data} />
        </DynamicModuleLoader>


    );
}
