import {useNavigate} from "react-router";
import {useTheme} from "shared/lib/hooks/useTheme";
import cls from "./studentsHeader.module.sass";
import {Link} from "react-router-dom";
import {Button} from "shared/ui/button";

import {Radio} from "shared/ui/radio";
import React, {useCallback, useState} from "react";

import {API_URL, useHttp} from "../../../../shared/api/base";
import {useSelector} from "react-redux";
import {getBranch} from "../../../../features/branchSwitcher";
import {getSystem} from "../../../../features/themeSwitcher";

export const StudentsHeader = ({onChange, selectedRadio, peoples, setActive, onClick}) => {

    const branchID = useSelector(getBranch)

    return (
        <div className={cls.mainContainer}>
            <div className={cls.mainContainer_buttonPanelBox}>

            </div>
            <div className={cls.mainContainer_filterPanelBox}>
                <Button
                    status={"filter"}
                    extraClass={cls.extraCutClassFilter}
                    onClick={() => setActive("filter")}
                    type={"filter"}
                >
                    Filter
                </Button>
                <a style={{color: "white"}}
                   href={`${API_URL}Students/export-students/?branch=${branchID.id}&format=json`}>
                    <Button type={"simple"}>

                        Exel formatda yuklash

                    </Button>
                </a>
                <div className={cls.mainContainer_filterPanelBox_rightFilterRadioGroupBox}>
                    {peoples.map((item, id) => (
                        <Radio
                            key={id}
                            onChange={() => onChange(item.name)}
                            checked={selectedRadio === item.name}
                            extraClasses={selectedRadio === item.name ? cls.activeFilter : null}
                        >
                            {item.label}
                        </Radio>
                    ))}
                </div>
            </div>
        </div>
    )
}