import {ROLES} from "shared/const/roles";

export const menuConfig = [


    {
        to: "calendar",
        name: "Kalendar",
        icon: "fas fa-calendar-times",
        system: ["school"],
        roles: [ROLES.director,ROLES.admin],

    },
    {
        to: "students",
        name: "O'quvchilar",
        icon: "fa-user-graduate",
        system: ["center","school"],
        roles: [ROLES.director],
        branches: true
    },
    {
        to: "groups",
        name: "Guruhlar",
        icon: "fa-users",
        system: ["center"],
        roles: [ROLES.director],
        branches: true


    },
    {
        to: "groups",
        name: "Sinflar",
        icon: "fa-users",
        system: ["school"],
        roles: [ROLES.director],
        branches: true

    },
    {
        to: "teacher",
        name: "O'qituvchilar",
        icon: "fa-user-tie",
        system: ["center","school"],
        roles: [ROLES.director],
        branches: true

    },
    {
        to: "vacancyPage",
        name: "Vakansiyalar",
        icon: "fa-tasks",
        system: ["center","school"],
        roles: [ROLES.director],
        branches: true
    },
    {
        to: "timeList",
        name: "Time List",
        icon: "fa-clock",
        system: ["center","school"],

        roles: [ROLES.director],
        branches: true

    },
    {
        to: "time",
        name: "Time Table",
        icon: "fa-clock",
        system: ["center","school"],
        roles: [ROLES.director],
        branches: true
    },
    {
        to: "employer",
        name: "Employers",
        icon: "fa-user-graduate",
        system: ["center","school"],

        roles: [ROLES.director],
        branches: true

    },
    {
        to: "flows",
        name: "Flows",
        icon: "fa-user-graduate",
        system: ["school"],

        roles: [ROLES.director],
        branches: true

    },
    {
        to: "class",
        name: "Class",
        icon: "fa-user-graduate",
        system: ["school"],

        roles: [ROLES.director],
        branches: true
    },
    {
        to: "capital",
        name: "Capital",
        icon: "fa-book",
        system: ["center","school"],

        roles: [ROLES.director],
        branches: true

    },
    {
        to: "accounting",
        name: "Buxgalteriya ",
        icon: "fa-calculator",
        system: ["center","school"],
        roles: [ROLES.director],
        branches: true,
        multi: true

    },
    {
        to: "rooms",
        name: "Honalar",
        icon: "fa-door-closed",
        system: ["center","school"],
        roles: [ROLES.director],
        branches: true

    },

    {
        to: "../../",
        name: "Web-Sayt",
        system: ["center","school"],
        roles: [ROLES.smm]
    },

    {
        to: "adminTaskManager",
        name: "Task Manager",
        icon: "fa-tasks",
        system: ["center","school"],
        roles: [ROLES.admin]
    }

];
