import cls from "entities/centerHome/ui/homeAbout/homeAbout.module.sass"
import ReactPlayer from "react-player";
import {useContext, useEffect, useRef, useState} from "react";
import {Context} from "pages/homePage/ui/CenterHomePage/CenterHomePage";
import classNames from "classnames";
import {Modal} from "shared/ui/modal";
import {Textarea} from "shared/ui/textArea";
import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";
import {useForm} from "react-hook-form";

export const HomeAbout = () => {
    const {setSectionTop} = useContext(Context)
    const [changeStatus, setChangeStatus] = useState(false)
    const {register, handleSubmit, setValue} = useForm()
    const sectionRef = useRef()

    useEffect(() => {
        setSectionTop(cur => ({...cur, about: sectionRef?.current?.offsetTop}))
    }, [setSectionTop])
    const onSubmit = (data) => {
        setChangeStatus(false)
    }

    const onChange = () => {
        // setValue("name", video?.name)
        // setValue("text", video?.text)
        // setValue("link", video?.url)
        setChangeStatus(true)
    }

    return (
        <div className={cls.about} ref={sectionRef}>
            <div className={cls.about__wrapper}>
                <div className={cls.about__info}>
                    {/*<i onClick={onChange} className={classNames("fa fa-pen", cls.icon)}></i>*/}
                    <div className={cls.about__text}>
                        <h1>Siz GENNIS oilasimisiz?</h1>
                        <span>Vaqt o'tgani sari markazimiz faoliyati kengayib bormoqda. Va bu bizga yanada ko'p masuliyatni
                    kafolatlamoqda. 😊 Sevimli o'quv markazingiz sizni sifatli ta'lim bilan ta'minlash bilan bir qatorda,
                    markazimizda inoq, qiziqarli va ijtimoiy atmosferani yaratish bilan ovora. Tez kunda ajoyib va
                    noodatiy yangiliklarni guvohi bo'lasiz</span>
                    </div>
                </div>
                <div className={cls.about__aside}>
                    <div className={cls.square}>
                        <ReactPlayer

                            url={"https://youtu.be/MsTFRTeUAMs?si=bFUb660ImL682wPE"}
                        />
                    </div>
                </div>
            </div>

            <Modal
                active={changeStatus}
                setActive={setChangeStatus}
            >
                <form className={cls.about__modal} onSubmit={handleSubmit(onSubmit)}>
                    <h1>Malumotlarni o'zgartirish</h1>
                    <div className={cls.wrapper}>
                        <Input
                            required
                            register={register}
                            placeholder={'Title'}
                            name={'name'}
                        />
                        <Input
                            required
                            register={register}
                            placeholder={'Link'}
                            name={'link'}
                        />
                        <Textarea
                            required
                            placeholder={'Text'}
                            {...register('text')}
                            cols="30"
                            rows="10"
                        />
                    </div>
                    <Button>O’zgartirish</Button>
                </form>
            </Modal>
        </div>
    );
};






