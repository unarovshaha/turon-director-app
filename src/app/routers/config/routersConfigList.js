import {

    getRouteStudents,
    getRouteTimePage,
    getRouteTeacher,
    getRouteGroups,
    getVacancyPage,
    getRouteRooms,
    getClass,
    getFlow,
    getContract,
    getCapital,
    getEmployerPage,
    getAccounting,
    getRouteCalendar,
    getRouteMain,
    getRouteRegister,

} from "shared/const/routers";


import {StudentsPage} from "pages/studentsPage";
import {GroupsPage} from "pages/groupsPage";
import {Rooms} from "pages/roomsPage";
import {TeachersPage} from "pages/teacherPage";
import {VacancyPage} from "pages/vacancyPage";
import {TimeTableListPage} from "pages/timeTableListPage";
import {EmployerPage} from "pages/employeesPage";
import {FlowsPage} from "pages/flowsPage";
import {ContractPage} from "pages/contractPage";
import {CapitalPage} from "pages/capitalPage";

import {AccountingPageMainIndex} from "pages/accountingPage";
import {CalendarPage} from "pages/calendarPage";
import {TimeTableTuronPage} from "pages/timeTable";
import {ClassMain} from "pages/classPage/ui/classMain";
import {Register} from "pages/registerPage";
import {RgbDataPage} from "pages/rgbDataPage";
import {TaskManager} from "pages/taskManager/ui/taskManager";



export const routersConfigList = [
    {
        name: "Bosh Sahifa",
        path: getRouteMain(),
        // element: <HomePage/>,
        element: null,
    },


    {
        name: "O'quvchilar",
        path: getRouteStudents(),
        element: <StudentsPage/>
    },
    {
        name: "Kalendar",
        path: getRouteCalendar(),
        element: <CalendarPage/>
    },
    {
        name: "Gruppalar",
        path: getRouteGroups(":id"),
        element: <GroupsPage/>
    },
    {
        name: "O'qituvchilar",
        path: getRouteTeacher(":id"),
        element: <TeachersPage/>
    },
    {
        name: "Time Table",
        path: getRouteTimePage(":idBranch"),
        element: <TimeTableListPage/>,
    },
    {
        name: "Vakansiyalar",
        path: getVacancyPage(":idBranch"),
        element: <VacancyPage/>,
    },
    {

        name: "Employers",
        icon: "fa-user-graduate",
        roles: [],
        path: getEmployerPage(":idBranch"),
        element: <EmployerPage/>,
    },
    {
        name: "Flows",
        path: getFlow(":id"),
        element: <FlowsPage/>,
    },
    {
        name: "Class",
        path: getClass(":id"),
        element: <ClassMain/>,
    },
    {
        path: getContract(":id"),
        name: "Contract",
        // icon: "fa fa-book",
        element: <ContractPage/>
    },
    {
        path: getCapital(":id"),
        name: "capital",
        element: <CapitalPage/>
    },

    {
        name: "Honalar",
        path: getRouteRooms(":id"),
        element: <Rooms/>,
    },

    {
        path: "calendar",
        element: <CalendarPage/>,
    },
    {
        name: "Time Table",
        path: "time/*",
        element: <TimeTableTuronPage/>,
    },

    {
        to: "/login",
        name: "Capital Category",
        icon: "fa-coins",
        roles: []
    },
    {
        to: "/login",
        name: "Centre info",
        icon: "fa-info",
        roles: []
    },
    {
        to: "/login",
        name: "Kitoblar",
        icon: "fa-book",
        roles: []
    },
    {
        name: "accounting",
        path: getAccounting(":id"),
        element: <AccountingPageMainIndex/>,
        isMultiPage: true
    },
    // {
    //     name: "capital category profile",
    //     path: getCapitalCategoryProfile(":id"),
    //     element: <CategoryProfile/>
    // },

    {
        name: "Registratsiya",
        path: getRouteRegister(),
        element: <Register/>,
    },

]