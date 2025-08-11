import cls from "entities/centerHome/ui/homeAdvantages/homeAdvantages.module.sass"
import img1 from "shared/assets/images/photo_2023-11-22_16-14-45.jpg"
import img2 from "shared/assets/images/photo_2023-11-22_16-14-53.jpg"
import img3 from "shared/assets/images/photo_2023-11-22_16-32-58.jpg"
import img4 from "shared/assets/images/photo_2023-11-22_16-30-42.jpg"
import img from "shared/assets/images/login-page-4468581-3783954 1.svg";
import React, {useContext, useEffect, useRef, useState} from "react";
import {Context} from "pages/homePage/ui/CenterHomePage/CenterHomePage";
import classNames from "classnames";
import {API_URL, headers, useHttp} from "shared/api/base";
import {Textarea} from "shared/ui/textArea";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useDropzone} from "react-dropzone";
import {changeAdvantages} from "entities/centerHome/model/homeSlice";
import {Modal} from "shared/ui/modal";
import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";

const advantages = [
    {img: img1, advantagesTitle: "Co-Working Zone", advantagesSubTitle: "lorem ipsum dolor sit amet", id: 1},
    {img: img2, advantagesTitle: "Friendly atmosphere", advantagesSubTitle: "lorem ipsum dolor sit amet", id: 2},
    {
        img: img3,
        advantagesTitle: "Different interesting events",
        advantagesSubTitle: "lorem ipsum dolor sit amet",
        id: 3
    },
    {
        img: img4,
        advantagesTitle: "Football games in 3 branches\n",
        advantagesSubTitle: "lorem ipsum dolor sit amet",
        id: 4
    },
    {img: img4, advantagesTitle: "Football games in 3 branches\n",},
]
export const HomeAdvantages = () => {

    const {setSectionTop} = useContext(Context)
    const sectionRef = useRef()
    const token = sessionStorage.getItem("token")
    const {request} = useHttp()
    const formData = new FormData()
    const dispatch = useDispatch()
    const {register, handleSubmit, setValue} = useForm()
    const [changeStatus, setChangeStatus] = useState(false)
    const [changeImage, setChangeImage] = useState({})
    const [changedItem, setChangedItem] = useState({})
    const {getInputProps, getRootProps} = useDropzone({
        onDrop: (acceptedFiles) => {
            setChangeImage(acceptedFiles[0])
        }
    })

    useEffect(() => {
        setSectionTop(cur => ({...cur, advantages: sectionRef?.current?.offsetTop}))
    }, [setSectionTop])

    function compareById(a, b) {
        return a.id - b.id;
    }


    const onChangeModal = (id) => {
        advantages.map(item => {
            if (item.id === id) {
                setValue("advantageName", item?.name)
                setValue("advantageText", item?.text)
                setChangedItem(item)
            }
            return null
        })
        setChangeImage({})
        setChangeStatus(true)
    }

    const onSubmit = (data) => {
        const res = {
            name: data.advantageName,
            text: data.advantageText
        }

        request(`${API_URL}change_advantage/${changedItem?.id}`, "POST", JSON.stringify(res), headers())
            .then(res => {
                setChangeStatus(false)
                dispatch(changeAdvantages(res?.advantage))
            })
            .catch(err => console.log(err))
        // formData.append("file", changeImage)
        // request(`${BackUrl}advantage_img/${changedItem?.id}`, "POST", formData, {"Authorization": "Bearer " + token})
        //     .then(res => {
        //         setChangeStatus(false)
        //
        //         dispatch(changeAdvantagesImage(res?.advantage))
        //     })
        //     .catch(err => console.log(err))
        // formData.delete("file")
    }


    return (
        <div className={cls.advantages} ref={sectionRef}>
            {/*<Modal*/}
            {/*    active={changeStatus}*/}
            {/*    setActive={setChangeStatus}*/}
            {/*>*/}
            {/*    <div*/}
            {/*        className={cls.advantages__modal}*/}
            {/*    >*/}
            {/*        <h1>Afzallikni o'zgartirish</h1>*/}
            {/*        <form*/}
            {/*            className={cls.wrapper}*/}
            {/*            onSubmit={handleSubmit(onSubmit)}*/}
            {/*        >*/}
            {/*            <div className={cls.wrapper__container}>*/}
            {/*                <div className={cls.wrapper__container_item}>*/}
            {/*                    <Input*/}
            {/*                        required*/}
            {/*                        register={register}*/}
            {/*                        name={'advantageName'}*/}
            {/*                        placeholder={'Title'}*/}
            {/*                        value={changedItem?.name}*/}
            {/*                        defaultValue={changedItem?.name}*/}
            {/*                    />*/}
            {/*                    <Textarea*/}
            {/*                        required*/}
            {/*                        cols="30"*/}
            {/*                        rows="10"*/}
            {/*                        {...register("advantageText", {*/}
            {/*                            value: changedItem?.text*/}
            {/*                        })}*/}
            {/*                        placeholder={"Text"}*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*                <div*/}
            {/*                    className={cls.wrapper__container_item}*/}
            {/*                    {...getRootProps()}*/}
            {/*                >*/}
            {/*                    {*/}
            {/*                        changeImage?.path ? <img src={*/}
            {/*                            URL.createObjectURL(changeImage)*/}
            {/*                        } alt=""/> : changedItem?.img ?*/}
            {/*                            <img src={changedItem?.img} alt=""/> : <>*/}
            {/*                                <div className={cls.image}>*/}
            {/*                                    <i className="far fa-image"/>*/}
            {/*                                    <h2>Rasm tashlang</h2>*/}
            {/*                                </div>*/}
            {/*                                <input*/}
            {/*                                    type="file"*/}
            {/*                                    {...getInputProps()}*/}
            {/*                                />*/}
            {/*                            </>*/}
            {/*                    }*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <Button>O'zgartirish</Button>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</Modal>*/}
            <div className={cls.advantages__wrapper}>

                {advantages.sort(compareById).map((item) => {
                    return (
                        <div className={cls.advantages__box}>
                            <h2>{item.advantagesTitle}</h2>
                            <div className={cls.advantages__box_item}>
                                {/*<i onClick={() => onChangeModal(item.id)} className={classNames("fa fa-pen", cls.icon)}/>*/}
                                <div className={cls.advantages__box_img}>
                                    <img src={`${item?.img}`} alt=""/>
                                </div>
                                {item.advantagesSubTitle?.length > 1 ? <div className={cls.advantages__box_info}>
                                    {item.advantagesSubTitle}
                                </div> : null}

                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

