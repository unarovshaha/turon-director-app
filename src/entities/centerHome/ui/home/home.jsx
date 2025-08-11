import React, {useContext, useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {useDropzone} from "react-dropzone";
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";
import {Select} from "shared/ui/select";
import {Context} from "pages/homePage";
import {Modal} from "shared/ui/modal"
import cls from "entities/centerHome/ui/home/home.module.sass"
import {useForm} from "react-hook-form";
import {API_URL, headers, headersImg, useHttp} from "shared/api/base";
import {useDispatch} from "react-redux";
import {Textarea} from "shared/ui/textArea";
import {fetchedImageError, fetchedImageItems, fetchingImageItems} from "entities/centerHome/model/homeSlice";
import {HomeHeader} from "entities/centerHome/ui/homeHeader/homeHeader";

const branches = [
    {name: "chirchiq"},
    {name: "xo'jakent"},
    {name: "gazalkent"},
    {name: "sergili"},
    {name: "nurafshon"},
]

export const Home = () => {
    const {setSectionTop} = useContext(Context)
    const [changeItem, setChangeItem] = useState({})
    const [changeStatus, setChangeStatus] = useState(false)
    const [changeImage, setChangeImage] = useState({})
    const dispatch = useDispatch()
    const sectionRef = useRef()
    const {request} = useHttp()
    const formData = new FormData()
    useEffect(() => {
        setValue("name", changeItem?.name)
        setValue("text", changeItem?.text)
    }, [changeItem])


    useEffect(() => {
        setSectionTop(cur => ({...cur, home: sectionRef?.current?.offsetTop}))
    }, [setSectionTop])

    const onChange = () => {
        // setChangeItem(image)
        setChangeStatus(!changeStatus)

    }
    const onSubmit = (data) => {

        dispatch(fetchingImageItems())

        formData.append("name", data.name)
        formData.append("text", data.text)
        formData.append("file", changeImage)


        request(`${API_URL}add_home_design`, "POST", formData, headersImg())
            .then(res => {
                if (res.success()) {
                    setChangeStatus(false)
                }
                dispatch(fetchedImageItems(res.design))
            })
            .catch(dispatch(fetchedImageError))
        formData.delete("name")
        formData.delete("text")
        formData.delete("file")

    }


    const {register, handleSubmit, setValue} = useForm()
    const {getRootProps, getInputProps} = useDropzone({
        onDrop: (acceptedFiles) => {
            setChangeImage(acceptedFiles[0])
        }
    })

    return (
        <>

            <div className={cls.home} ref={sectionRef}>

                <div className={cls.homeWrapper}>

                    <div className={cls.homeTexts}>
                        {/*<div onClick={onChange}>*/}
                        {/*    <i className={classNames("fa fa-pen ", cls.icon)}></i>*/}
                        {/*</div>*/}

                        <div className={cls.homeTitle}>
                            GENNIS - "Muvaffaqiyatni istaganlar uchun"
                        </div>
                        <div className={cls.homeParagraph}>
                            <p>GENNIS ta'lim markazi sifatida bizning missiyamiz – har bir talabamizning intellektual va
                                shaxsiy
                                o'sishini qo'llab-quvvatlashdir. Biz yuqori sifatli ta'lim, innovatsion o'quv dasturlari
                                va
                                iliq,
                                qo'llab-quvvatlovchi muhit yaratish orqali talabalarning muvaffaqiyatga erishishlariga
                                yordam
                                beramiz. Bizning maqsadimiz – o'quvchilarimizning bilim va ko'nikmalarini
                                rivojlantirish,
                                ularni
                                global raqobatga tayyorlash va ularga o'zlarining intilishlariga erishishlari uchun
                                barcha
                                zarur
                                vositalarni taqdim etishdir. "Muvaffaqiyatni istaganlar uchun" GENNIS sizning ishonchli
                                hamkoringizdir.</p>
                        </div>
                    </div>
                    <div className={cls.homeAside}>
                        <div className={cls.homeAside__title}>
                            Ro’yxatdan o’tish
                        </div>
                        <form action="">
                            <Input extraClassName={cls.home__input} placeholder={"name"} type={"text"}/>
                            <Input extraClassName={cls.home__input} placeholder="+998 (__) ___ __ __" type={"number"}/>
                            <Select extraClass={cls.select} options={branches}/>
                            <Button extraClass={cls.buttonExtra}>Registratsiya</Button>
                        </form>
                    </div>
                </div>


                <Modal
                    active={changeStatus}
                    setActive={setChangeStatus}
                >
                    <div className={cls.home__modal}>
                        <h1>Malumotlarni o'zgartirish</h1>
                        <div className={cls.wrapper}>
                            <div
                                className={cls.home__modal_img}
                                {...getRootProps()}
                            >
                                {/*{*/}
                                {/*    changeImage?.path ? <img src={URL.createObjectURL(changeImage)} alt=""/>*/}
                                {/*        : image?.img ? <img src={API_URL + image?.img} alt=""/>*/}
                                {/*            : <>*/}
                                {/*                <input*/}
                                {/*                    required*/}
                                {/*                    {...getInputProps()}*/}
                                {/*                    type="file"*/}
                                {/*                />*/}
                                {/*                <i className="far fa-image"/>*/}
                                {/*            </>*/}
                                {/*}*/}
                            </div>
                            <form
                                className={cls.home__modal_text}
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <Input
                                    required
                                    register={register}
                                    name={'name'}
                                    placeholder={'Title'}
                                />
                                <Textarea
                                    placeholder="Text"
                                    required
                                    {...register("text")}
                                    cols="30"
                                    rows="10"
                                />
                                <Button>O'zgartirish</Button>
                            </form>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
};




