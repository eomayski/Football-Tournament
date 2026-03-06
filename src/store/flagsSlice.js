import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Национални администрации които имат собствени футболни отбори
const SPECIAL_FLAGS = {
    'England': 'https://flagcdn.com/w40/gb-eng.png',
    'Scotland': 'https://flagcdn.com/w40/gb-sct.png',
    'Wales': 'https://flagcdn.com/w40/gb-wls.png',
    'Northern Ireland': 'https://flagcdn.com/w40/gb-nir.png',
    'Czech Republic': 'https://flagcdn.com/w40/cz.png'
};

export const fetchFlags = createAsyncThunk(
    'flags/fetchFlags',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');

            if (!response.ok) {
                const errorMsg = 'Failed to fetch flags data';
                toast.error(errorMsg);
                return rejectWithValue(errorMsg);
            }

            const data = await response.json();

            const flagsDictionary = data.reduce((acc, country) => {
                acc[country.name.common] = country.flags.png;
                return acc;
            }, {});

            Object.assign(flagsDictionary, SPECIAL_FLAGS);
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