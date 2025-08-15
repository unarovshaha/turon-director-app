import React, {lazy, Suspense} from 'react';
import {createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import classNames from "classnames";
import {RequireAuth} from "./RequireAuth";
import {routersConfigList} from "app/routers/config/routersConfigList.jsx";
import {routersConfigProfile} from "app/routers/config/routerConfigProfiles";



import {useTheme} from "shared/lib/hooks/useTheme";

const Login = lazy(() => import("pages/loginPage"))
const Register = lazy(() => import("pages/registerPage"));
const StudentProfilePage = lazy(() => import("pages/profilePage"));
const ClassMolassesPage = React.lazy(() =>
    import("pages/School").then((module) => ({
        default: module.ClassMolassesPage
    }))
);
const FlowListPage = React.lazy(() => import("pages/FlowListPage").then((module) => ({
    default: module.FlowListPage
})));
const Layout = React.lazy(() => import("app/layouts/layout").then((module) => ({
    default: module.Layout
})));

const ClassAddColorPage = lazy(() => import("pages/classPage").then((module) =>
    ({default: module.ClassAddColorPage})));
const Target = lazy(() => import("pages/target/ui/Target"));
const LayoutTarget = lazy(() => import("app/layouts/layoutTarget/LayoutTarget"));
const FlowProfileNavigators = lazy(() => import("entities/flowsProfile").then((module) => ({default: module.FlowProfileNavigators})));

const StudentsPage = lazyPage(() => import("pages/studentsPage"), "StudentsPage");


import "app/styles/index.sass";
import {lazyPage} from "shared/lib/lazyPage/lazyPage.js";
import RequireHeader from "app/routers/ui/RequireHeader.jsx";
import RequireBranch from "app/routers/ui/RequireBranch.jsx";



export const AppRouter = () => {

    const {theme} = useTheme()

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path="*"
                    element={<Navigate to="login" replace/>}
                />
                <Route
                    path={"/login"}
                    element={<Login/>}
                />
                {/*<Route*/}
                {/*    path={"register"}*/}
                {/*    element={<Register/>}*/}
                {/*/>*/}

                {/*<Route path={"/register/target/*"} element={<LayoutTarget>*/}
                {/*    <Target/>*/}
                {/*</LayoutTarget>}/>*/}

                <Route element={<RequireAuth/>}>

                    <Route path={"platform/*"} element={<Layout/>}>

                        <Route element={<RequireHeader/>}>
                            {
                                routersConfigList.map((item, index) =>
                                    <Route
                                        key={index}
                                        path={item.path}
                                        element={
                                            // item.element
                                            <RequireBranch>
                                                <Suspense fallback={<div>Loading...</div>}>
                                                    {item.element}
                                                </Suspense>
                                            </RequireBranch>
                                        }
                                    />
                                )
                            }
                        </Route>

                        <Route element={<RequireHeader header={false} back={false}/>}>
                            {
                                routersConfigProfile.map((item, index) =>
                                    <Route
                                        key={index}
                                        path={item.path}
                                        element={
                                            <RequireBranch>
                                                <Suspense fallback={<div>Loading...</div>}>
                                                    {item.element}
                                                </Suspense>
                                            </RequireBranch>
                                        }
                                    />
                                )
                            }
                        </Route>


                        <Route
                            path={"profile"}
                            element={<StudentProfilePage/>}
                        />


                        {/*<Route*/}
                        {/*    path={"molasses"}*/}
                        {/*    element={<ClassMolassesPage/>}*/}
                        {/*/>*/}
                        {/*<Route*/}
                        {/*    path={"flows/flowsProfile/:id"}*/}
                        {/*    element={<FlowProfileNavigators/>}*/}
                        {/*/>*/}

                        {/*<Route*/}
                        {/*    path={"flows/flow-list"}*/}
                        {/*    element={<FlowListPage/>}*/}
                        {/*/>*/}
                        {/*<Route*/}
                        {/*    path={"classColorAdd"}*/}
                        {/*    element={<ClassAddColorPage/>}*/}
                        {/*/>*/}


                        <Route
                            index
                            element={<Navigate to={"dashboard"}/>}
                        />
                    </Route>
                </Route>

            </>
        )
    );

    return (
        <div className={classNames("app", [theme])}>
            <Suspense>
            <RouterProvider router={router}/>
            </Suspense>
        </div>
    );
};
