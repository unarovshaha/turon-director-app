import {createSlice} from "@reduxjs/toolkit";
import {fetchLocationsThunk} from "features/locations/model/thunk/locationsThunk";

const initialState = {
    locations: [],
    taskLoc: [],
    systemId: null,
    selectedLocations: [],
    loading: false,
    fetchStatus: "idle",
    error: null
}

export const locationsSlice = createSlice({
    name: "locationsSlice",
    initialState,
    reducers: {
        addSelectedLocations: (state, action) => {
            let payload = action.payload;
            if (typeof payload === "string") {
                try {
                    payload = JSON.parse(payload);
                } catch (err) {
                    console.error("JSON parse error:", err);
                }
            }
            console.log("Yangi payload:", payload, Array.isArray(payload));

            if (Array.isArray(payload)) {

                state.selectedLocations = payload;

                localStorage.setItem("selectedLocations", JSON.stringify(state.selectedLocations));


            } else {

                const selected = state.locations.find(item => item.id === +payload);
                state.selectedLocations = selected ? [selected] : [];

                localStorage.setItem(
                    "selectedLocations",
                    JSON.stringify(state.selectedLocations)
                );

                state.locations = state.locations.map(loc => ({
                    ...loc,
                    disabled: loc.id === +payload,
                }));
            }
        },

        deleteSelectedLocations: (state,action) => {
            localStorage.setItem("selectedLocations", JSON.stringify(state.selectedLocations.filter(item => item.id !== +action.payload)))
            state.selectedLocations = state.selectedLocations.filter(item => item.id !== +action.payload)
            state.locations = state.locations.map(item => {
                if (item.id === +action.payload) {
                    return {
                        ...item,
                        disabled: false
                    }
                }

                return item
            })

        },


        clearSelectedLocations: (state,action) => {
            state.selectedLocations = []
            if (state.systemId && action.payload !== state.systemId) {
                localStorage.removeItem("selectedLocations")
            }


        }
    },
    extraReducers: builder =>
        builder
            .addCase(fetchLocationsThunk.pending, state => {
                state.loading = true
                state.error = null
                state.fetchStatus = "pending"
            })
            .addCase(fetchLocationsThunk.fulfilled, (state, action) => {


                state.systemId = action.payload.systemId
                state.taskLoc = action.payload.list
                console.log(action.payload, 'pauy')

                const localstorageLocs = JSON.parse(localStorage.getItem("selectedLocations"))


                if (localstorageLocs && localstorageLocs.length > 0) {
                    state.selectedLocations = localstorageLocs
                    state.locations = action.payload.list.map(item => {

                        const isHave = localstorageLocs.some(loc => loc?.id === item.id)

                        if (isHave) {
                            return {
                                ...item,
                                disabled: true
                            }
                        }
                        return item
                    })
                } else {

                    localStorage.setItem("selectedLocations", JSON.stringify( [action.payload.list[0]]))
                    state.selectedLocations = [action.payload.list[0]]
                    state.locations = action.payload.list.map((item,index) => {
                        if (index === 0) {
                            return {
                                ...item,
                                disabled: true
                            }
                        }
                        return item
                    })
                }

                state.loading = false
                state.error = null
                state.fetchStatus = "success"
            })
            .addCase(fetchLocationsThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
                state.fetchStatus = "error"

            })


})

export const locationsReducer = locationsSlice.reducer
export const {deleteSelectedLocations,addSelectedLocations,clearSelectedLocations} = locationsSlice.actions
