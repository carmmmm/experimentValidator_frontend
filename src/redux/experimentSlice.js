import { createSlice } from '@reduxjs/toolkit';

export const experimentSlice = createSlice({
    name: 'experiment',
    initialState: {
        data: null,
        status: 'idle',
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
    },
});

export const { setData, setStatus } = experimentSlice.actions;
export default experimentSlice.reducer;