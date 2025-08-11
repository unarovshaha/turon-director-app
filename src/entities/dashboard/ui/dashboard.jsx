import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSelectedLocationsByIds} from "features/locations/model/selector/locationsSelector.js";
import {fetchMultiPageDataThunk, getMultiPageData, multiPageReducer} from "widgets/multiPage/index.js";
import cls from "./dashboard.module.sass"
import {Barchart, Chart, HorizontalChart} from "shared/ui/chart/index.js";
import {EditableCard} from "shared/ui/editableCard/index.js";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.jsx";
import {locationsReducer} from "features/locations/index.js";
const types = [

    {
        name: "O'qiyotgan o'quvchilar",
        type: "studying_students"
    },
    {
        name: "O'qituvchilar",
        type: "teachers"
    },
    {
        name: "Ishchilar",
        type: "worker"
    },
    {
        name: "Guruhlar",
        type: "groups"
    },
    {
        name: "Xonalar",
        type: "rooms"
    },
    {
        name: "Yangi o'quvchilar",
        type: "new_students"
    }

];

const typeColors2 = {
    groups: "#7886CA",
    teachers: "#9B97E9",
    studying_students: "#FEC59F",
    rooms: "#6eccff",
    worker: "#5BE2FD",
    new_students: "#9ffec0"
};

const typeColors = {
    groups: "#49579B",
    teachers: "#7C76DE",
    studying_students: "#FA9757",
    rooms: "#2ab4ff",
    worker: "#02B2D4",
    new_students: "#57faa3"
};

const cardNames = {
    groups: "Sinflar",
    teachers: "O'qituvchilar",
    studying_students: "O'qiyotgan o'quvchilar",
    rooms: "Xonalar",
    worker: "Ishchilar",
    new_students: "Yangi o'quvchilar"

}

const cardIcons = {
    studying_students: <i style={{fontSize: "6rem", color: "#FA9757"}}  className="fa-solid fa-graduation-cap"></i>,
    teachers: <i style={{fontSize: "6rem",color: "#7C76DE"}} className="fa-solid fa-people-group"></i>,
    worker: <i style={{fontSize: "6rem",color: "#02B2D4"}} className="fa-solid fa-users-line"></i>,
    groups: <i style={{fontSize: "6rem",color:  "#49579B"}} className="fa-solid fa-children"></i>,
    rooms: <i style={{fontSize: "6rem",color: "#6eccff"}} className="fa-solid fa-door-open"></i>,
    new_students: <i style={{fontSize: "6rem", color: "#8dfa57"}}  className="fa-solid fa-graduation-cap"></i>
}


const reducers = {
    multiPageSlice: multiPageReducer,
}

export const Dashboard = () => {

    const locations = useSelector(getSelectedLocationsByIds)
    const dispatch = useDispatch()
    const data = useSelector(getMultiPageData)
    const onlyStudyingList = data?.find(item => item.type === "studying_students")?.list;
    const flatList = onlyStudyingList?.flatMap(item => item.list);
    const onlyNewStudents = data?.find(item => item.type === "new_students" )?.list
    const flatNewStudents = onlyNewStudents?.flatMap(item => item.list);
    const result = data?.map(section => {
        const totalCount = section.list
            .flatMap(item => item.list)
            .reduce((sum, el) => sum + el.count, 0);

        return {
            type: section.type,
            name: cardNames[section.type],
            totalCount,
            color: typeColors[section.type] || "#CCCCCC",
            second_color: typeColors2[section.type] || 0,
            icons: cardIcons[section.type]
        };
    });
    console.log(locations, 'da')


    useEffect(() => {
        const data = {
            locations,
            types
        }
        dispatch(fetchMultiPageDataThunk(data))
    }, [locations.length]);


    const renderCards = () => {
        return result?.map((item, index) => {
            return(
                <div className={cls.main__header__card} style={{boxShadow: `0 0 16px ${item.second_color}`,backgroundImage: `linear-gradient(to right, ${item.color}, ${item.second_color})`}}>
                    <div className={cls.main__header__card__leftSide}>
                        <h1>{item.totalCount}</h1>
                        <h2>{item.name}</h2>
                    </div>
                    <div className={cls.main__header__card__rightSide}>
                        <div className={cls.main__header__card__rightSide__circle}>
                            {item.icons}
                        </div>
                    </div>
                </div>
            )
        })

    }

    return (
        <DynamicModuleLoader reducers={reducers}>

        <div className={cls.main}>
            <div className={cls.main__header}>
            {renderCards()}
            </div>
            <div className={cls.main__center}>
                <EditableCard extraClass={cls.main__center__box}  titleType={""} >
                    <Barchart data={flatNewStudents}/>
                </EditableCard>
                <EditableCard extraClass={cls.main__center__card} titleType={""} >
                <Chart data={flatList}/>
                </EditableCard>
            </div>
            <EditableCard extraClass={cls.main__chart} titleType={""}>
                <HorizontalChart newStudents={flatNewStudents} studyingStudents={flatList}/>
            </EditableCard>
        </div>
        </DynamicModuleLoader>
    );
};

