import React, {useCallback, useEffect, useState} from 'react';
import { Select } from 'shared/ui/select';
import cls from './Location.module.sass';
import {useDispatch, useSelector} from 'react-redux';


import {addSelectedLocations} from "../model/slice/locationsSlice";
import {fetchLocationsThunk} from "../model/thunk/locationsThunk";
import {
    getLocationLoading,
    getLocations,
    getSelectedLocations,
    getSelectedLocationsByIds
} from "../model/selector/locationsSelector";
import {MiniLoader} from "shared/ui/miniLoader";


export const Location = ({systemId}) => {


    const locations = useSelector(getLocations)
    const formattedData = [
        {
            id: JSON.stringify(locations.map(loc => ({ id: loc.id, name: loc.name }))),
            name: "Hammasi",
        },
        ...locations.map(item => ({
            id: item.id,
            name: item.name,
        }))
    ];

    const loading = useSelector(getLocationLoading)




    const dispatch = useDispatch();

    console.log(formattedData, 'dddd')
    console.log(locations, 'ddddddd')





    const changeSelectedLocation = useCallback( (id) => {

        dispatch(addSelectedLocations(id))
    },[]);

    if (loading) {
        return (
            <div className={cls.loader}>
                <MiniLoader/>
            </div>
        )
    }


    return (
        <div className={cls.locations}>
            <Select options={formattedData  } onChangeOption={changeSelectedLocation}/>
            {/*{*/}
            {/*    locations.length > 1 ?*/}
            {/*        <Select*/}
            {/*            // title={"Location"}*/}
            {/*            onChangeOption={changeSelectedLocation}*/}
            {/*            options={locations}*/}
            {/*            defaultValue={selectedLocations.length === 1 ? "clear" : ""}*/}
            {/*        />*/}
            {/*        :*/}
            {/*        selectedLocations?.[0]?.name ?*/}
            {/*        <div className={cls.location}>*/}
            {/*            <span>Location:</span>*/}
            {/*            <span>{selectedLocations?.[0]?.name}</span>*/}
            {/*        </div> : null*/}
            {/*}*/}

        </div>
    );
};


