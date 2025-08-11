import React, {useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import { useForm} from "react-hook-form";

import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";
import {MiniLoader} from "shared/ui/miniLoader";
import cls from "./login.module.sass"
import turonImg from "shared/assets/logo/turonLogo.png"
import loginAside from "shared/assets/images/login-page-4468581-3783954 1.svg"
import {API_URL, useHttp} from "shared/api/base";
import {getUserData} from "../model/loginSlice";



export const Login = () => {


    const {request} = useHttp()


    const {register, handleSubmit , setValue} = useForm()
    const [loading, setLoading] = useState(true)


    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    const navigate = useNavigate()


    const onClick = (e) => {

        const res = {
            username: e.username,
            password: e.password

        }

        setLoading(!loading)


        request(`${API_URL}token/`, "POST", JSON.stringify(res))
            .then(res => {
                dispatch(getUserData(res))
                navigate("/platform")
                setLoading(false)

            })
            .catch(err => {

                setLoading(true)
                setError(true)
                setValue("username" , "")
                setValue("password" , "")

            })


    }
    return (
        <div className={cls.container}>


            <div className={cls.login__logo}>
                <img src={turonImg} alt=""/>
            </div>

            <div className={cls.login}>

                <div className={cls.login__boxes}>

                    <div className={cls.login__box}>

                        <div className={cls.box__header_img}>
                            <img src={turonImg} alt=""/>
                        </div>
                        <h1 className={cls.box__header_title}>
                            login
                        </h1>
                        {error && error ?
                            <div className={cls.login__error}>Username yoki Parol noto'g'ri !</div> : null}
                        <div className={cls.box__form}>
                            <form onSubmit={handleSubmit(onClick)}>
                                {loading ?
                                    <>
                                        <Input

                                            title={"username"}
                                            register={register}
                                            name={"username"}
                                            type="text"
                                            required/>


                                        <Input
                                            title={"password"}
                                            register={register}
                                            name={"password"}
                                            type="password"
                                            required/>
                                    </>
                                    :
                                    <>
                                        <Input

                                            disabled

                                            title={"username"}
                                            register={register}
                                            name={"username"}
                                            type="text"
                                            required/>
                                        <Input
                                            title={"password"}
                                            register={register}
                                            name={"password"}
                                            type="password"
                                            required
                                            disabled/>
                                    </>
                                }
                                {loading ?
                                    <Button extraClass={cls.login__btn}>Login</Button> :
                                    <MiniLoader/>}
                            </form>
                        </div>
                    </div>
                    <div className={cls.login__aside}>
                        <img src={loginAside} alt=""/>
                    </div>
                </div>
            </div>
        </div>

    )
}