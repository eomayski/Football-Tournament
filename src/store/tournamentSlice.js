import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    matches: {},
    players: {},
    records: {},
    teams: {},
    isLoaded: false
};

const tournamentSlice = createSlice({
    name: 'tournament',
    initialState,
    reducers: {
        setFileData: (state, action) => {
            state[action.payload.type] = action.payload.data;
        },
        finalizeUpload: (state) => { state.isLoaded = true; },
        resetData: () => initialState
    }
});

export const { setFileData, finalizeUpload, resetData } = tournamentSlice.actions;

export default tournamentSlice.reducer;