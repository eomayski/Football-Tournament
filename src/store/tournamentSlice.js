import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { parseCSV } from '../utils/csvParser.js';

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

const DEFAULT_FILES = [
    { type: 'matches', idKey: 'ID', path: 'assets/matches.csv' },
    { type: 'players', idKey: 'ID', path: 'assets/players.csv' },
    { type: 'records', idKey: 'ID', path: 'assets/records.csv' },
    { type: 'teams',   idKey: 'ID', path: 'assets/teams.csv'   },
];

export const loadDefaultData = createAsyncThunk(
    'tournament/loadDefaultData',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            for (const { type, idKey, path } of DEFAULT_FILES) {
                const response = await fetch(`${import.meta.env.BASE_URL}${path}`);
                if (!response.ok) throw new Error(`Failed to fetch ${path}`);
                const text = await response.text();
                dispatch(setFileData({ type, data: parseCSV(text, idKey) }));
            }
            dispatch(finalizeUpload());
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const { setFileData, finalizeUpload, resetData } = tournamentSlice.actions;

export default tournamentSlice.reducer;