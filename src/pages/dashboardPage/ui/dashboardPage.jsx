import React, {useEffect} from 'react';
import cls from './dashboardPage.module.sass'
import {Dashboard} from "entities/dashboard/index.js";


export const DashboardPage = () => {




    return (
        <div className={cls.main}>
                <Dashboard/>
        </div>
    );
};

