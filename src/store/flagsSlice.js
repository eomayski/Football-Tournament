import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Fallback за UK нации, в случай че не са включени в flagcdn codes.json
const UK_NATIONS = {
    'England': 'gb-eng',
    'Scotland': 'gb-sct',
    'Wales': 'gb-wls',
    'Northern Ireland': 'gb-nir',
    'Czech Republic' : 'cz'
};

export const fetchFlags = createAsyncThunk(
    'flags/fetchFlags',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://flagcdn.com/en/codes.json');

            if (!response.ok) {
                const errorMsg = 'Failed to fetch flags data';
                toast.error(errorMsg);
                return rejectWithValue(errorMsg);
            }

            const codes = await response.json();

            const flagsDictionary = Object.entries(codes).reduce((acc, [code, name]) => {
                acc[name] = `https://flagcdn.com/w40/${code}.png`;
                return acc;
            }, {});

            Object.entries(UK_NATIONS).forEach(([name, code]) => {
                flagsDictionary[name] = `https://flagcdn.com/w40/${code}.png`;
            });

            return flagsDictionary;
        } catch (error) {
            const errorMsg = error.message || 'An unexpected error occurred';
            toast.error(errorMsg);
            return rejectWithValue(errorMsg);
        }
    }
);

const flagsSlice = createSlice({
    name: 'flags',
    initialState: {
        items: {},
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFlags.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFlags.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchFlags.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default flagsSlice.reducer;