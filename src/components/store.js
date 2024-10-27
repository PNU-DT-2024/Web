import { configureStore, createSlice } from '@reduxjs/toolkit'
let teamName = createSlice({
    name: 'teamName',
    initialState: {
        name: 'WEB'
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        }
    }

})
let lastVisit = createSlice({
    name: 'lastVisit',
    initialState: {
        visit: 'indiv'
    },
    reducers: {
        saveVisit: (state, action) => {
            state.visit = action.payload;
            console.log(state.visit);
        }
    }

})
export const { changeName } = teamName.actions;
export const { saveVisit } = lastVisit.actions;
export default configureStore({
    reducer: {
        teamName: teamName.reducer,
        lastVisit: lastVisit.reducer
    }
})