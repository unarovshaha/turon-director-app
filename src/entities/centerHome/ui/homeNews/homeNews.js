import cls from "entities/centerHome/ui/homeNews/homeNews.module.sass"
import Slider from "react-slick";
import React, {useCallback, useContext, useEffect, useRef, useState} from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from "shared/assets/images/login-page-4468581-3783954 1.svg"
import img1 from "shared/assets/images/Rectangle 869.svg"
import {Button} from "shared/ui/button";
import {Context} from "pages/homePage/ui/CenterHomePage/CenterHomePage";
import classNames from "classnames";
import {Textarea} from "shared/ui/textArea";
import {useForm} from "react-hook-form";
import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {useDispatch, useSelector} from "react-redux";
import {API_URL, useHttp} from "shared/api/base";
import {useDropzone} from "react-dropzone";
import {
    fetchingNews,
    addNew,
    changeNew
} from "entities/centerHome/model/homeSlice";

const list = [1, 2, 3, 4 ]
const newsData = [
    {
        id: 1,
        img: img,
        newsTitle: "weddede",
        newsSubTitle: "dasddas",
        newsParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    },
    {
        id: 2,
        img: img1,
        newsTitle: "weddede",
        newsSubTitle: "dasddas",
        newsParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    },
    {
        id: 3,
        img: img1,
        newsTitle: "weddede",
        newsSubTitle: "dasddas",
        newsParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    },
    {
        id: 4,
        img: img1,
        newsTitle: "weddede",
        newsSubTitle: "dasddas",
        newsParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    },
    {
        id: 5,
        img: img1,
        newsTitle: "weddede",
        newsSubTitle: "dasddas",
        newsParagraph: " since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    }
]
export const HomeNews = () => {
    const {newsList, teachersLoadingStatus} = useSelector(state => state?.homeSlice)

    const token = sessionStorage.getItem("token")
    const {request} = useHttp()
    const {setSectionTop} = useContext(Context)
    const {register, handleSubmit, setValue} = useForm()
    const [addStatus, setAddStatus] = useState(false)
    const [changeStatus, setChangeStatus] = useState(false)
    const sectionRef = useRef()
    const [imagesList, setImagesList] = useState([])
    const [changeItem, setChangeItem] = useState({})
    const formData = new FormData()
    const [changedImages, setChangedImages] = useState([])
    const dispatch = useDispatch()
    const [moreRead , setReadMore] = useState(false)
    useEffect(() => {
        if (teachersLoadingStatus === 'success')
            setSectionTop(cur => ({...cur, news: sectionRef?.current?.offsetTop}))
    }, [setSectionTop, teachersLoadingStatus])

    const onImages = (value) => {
        const filtered = imagesList.filter(item => item.type !== value.type)
        setImagesList(arr => [...filtered, value])
    }

    const onSubmitAdd = (data) => {
        // dispatch(fetchingNews())
        let linkList;
        let otherForChange;
        if (changeStatus) {

            otherForChange = {
                list: changedImages[0] ? changedImages : []
            }
            linkList = [
                {
                    link_id: changeItem.links[0]?.id,
                    type: "instagram",
                    link: data?.instagram ? data?.instagram : ""
                },
                {
                    link_id: changeItem.links[1]?.id,
                    type: "facebook",
                    link: data?.facebook ? data?.facebook : ""
                },
                {
                    link_id: changeItem.links[2]?.id,
                    type: "telegram",
                    link: data?.telegram ? data?.telegram : ""
                }
            ]
        } else if (addStatus) {
            linkList = [
                {
                    type: "instagram",
                    link: data?.instagram ? data?.instagram : ""
                },
                {
                    type: "facebook",
                    link: data?.facebook ? data?.facebook : ""
                },
                {
                    type: "telegram",
                    link: data?.telegram ? data?.telegram : ""
                }
            ]
        }
        const res = {
            title: data.title,
            date: data.date,
            text: data.text,
            links: linkList,
            ...otherForChange
        }

        imagesList.map(item => {
            formData.append(item.type, item.file)
            return null
        })
        formData.append('res', JSON.stringify(res))

        if (addStatus) {
            request(`${API_URL}add_news`, "POST", formData, {"Authorization": "Bearer " + token})
                .then(res => {
                    dispatch(addNew(res?.new))
                    setAddStatus(!res.success)
                })
                .catch((err => console.log(err)))
        } else if (changeStatus) {
            request(`${API_URL}change_news/${changeItem.id}`, "PUT", formData, {"Authorization": "Bearer " + token})
                .then(res => {
                    dispatch(changeNew(res.news))
                    setChangeStatus(!res.success)
                })
                .catch(err => console.log(err))
        }
        formData.delete('res')
        formData.delete('image_1')
        formData.delete('image_2')
        formData.delete('image_3')
        formData.delete('image_4')
    }

    const onAdd = () => {
        setValue("title", null)
        setValue("date", null)
        setValue("text", null)
        setValue("instagram", null)
        setValue("telegram", null)
        setValue("facebook", null)
        setAddStatus(true)
    }


    return (
        <div className={cls.news} ref={sectionRef}>
            <div className={cls.news__wrapper}>
                {newsData.map((item, i) => (

                    <div className={cls.news__box}>
                        <div className={cls.news__box_img}>
                            <img src={item.img} alt=""/>
                        </div>
                        <div className={cls.news__box_title}>
                            <div className={cls.news__box_info}>
                                {item.newsTitle} {item.newsSubTitle}
                            </div>
                            <div className={classNames(cls.news__box_subject, {
                                [cls.news__box_readMoreText]: moreRead === i
                            })}>
                                {item.newsParagraph}
                            </div>
                            <div className={cls.news__box_readMore}>
                                <Button onClick={() => setReadMore(i)
                                }>Read more ...</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>




            {/*<i onClick={onAdd} className={classNames("fa fa-plus", cls.plus)}></i>*/}


            <Modal
                active={addStatus ? addStatus : changeStatus}
                setActive={addStatus ? setAddStatus : setChangeStatus}
            >
                <div className={cls.news__changeAdd}>
                    {
                        addStatus ? <h1>Yangilik kiritish</h1>
                            : <h1>Yangilikni o'zgartirish</h1>
                    }
                    <div className={cls.wrapper}>
                        <div className={cls.news__changeAdd_images}>
                            <div className={cls.items}>
                                {
                                    list.map((item, i) => {
                                        return (
                                            <ImageDrop
                                                key={i}
                                                status={addStatus}
                                                image={changeItem?.images ? changeItem?.images[i] : []}
                                                setChangedImages={setChangedImages}
                                                onImages={onImages}
                                                index={i}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <form
                            id={"news-form"}
                            className={cls.news__changeAdd_content}
                            onSubmit={handleSubmit(onSubmitAdd)}
                        >
                            <Input
                                register={register}
                                name={'title'}
                                placeholder={'Title'}
                            />
                            <Input
                                register={register}
                                name={'date'}
                                type={'date'}
                            />
                            <Textarea
                                placeholder="Text"
                                required
                                cols="30"
                                rows="10"
                                {...register('text')}
                            />
                            <Input
                                required={false}
                                register={register}
                                name={'instagram'}
                                placeholder={'Instagram'}
                            />
                            <Input
                                required={false}
                                register={register}
                                name={'telegram'}
                                placeholder={'Telegram'}
                            />
                            <Input
                                required={false}
                                register={register}
                                name={'facebook'}
                                placeholder={'Facebook'}
                            />
                            {changeStatus ? <Button form={"news-form"}>O’zgartirish</Button> :
                                <Button form={"news-form"}>Qo'shish</Button>}
                        </form>

                    </div>
                </div>
            </Modal>
        </div>
    )
}


const ImageDrop = ({onImages, index, setChangedImages, image, status}) => {
    useEffect(() => {
        if (status) {
            setImg({})
        }
    }, [status])

    const [img, setImg] = useState({})
    const {getInputProps, getRootProps} = useDropzone({
        onDrop: (acceptedFiles) => {
            onImages({
                type: `image_${index + 1}`,
                file: acceptedFiles[0]
            })
            setImg(acceptedFiles[0])
            setChangedImages(arr => [...arr, image?.id])
        }
    })

    const ImageRender = useCallback(({img, image}) => {
        return (
            img?.path ? <img src={URL.createObjectURL(img)} alt=""/>
                : status ? <>
                    <i className="far fa-image"/>
                    <input
                        type="file"
                        {...getInputProps()}
                    />
                </> : image?.url ? <img src={API_URL + image.url} alt=""/> : <>
                    <i className="far fa-image"/>
                    <input
                        type="file"
                        {...getInputProps()}
                    />
                </>
        )
    }, [img, image])

    return (
        <div
            className={cls.items__item}
            {...getRootProps()}
        >
            <ImageRender
                img={img}
                image={image}
            />
        </div>
    )
}


const Example = ({images}) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    }

    return (
        <div className={cls.box__img}>
            <Slider {...settings}>
                {
                    images.map(item => {
                        return (
                            <div
                                className={cls.img}
                            >
                                <img
                                    src={API_URL + item?.url}
                                    alt=""
                                />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}
