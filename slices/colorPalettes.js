import { createSlice } from '@reduxjs/toolkit';



const colorPalettes = createSlice({
    name: 'colorPalettes',
    initialState: {
        colors: [],
    },
    reducers: {
        setColors: (state, action) => {
            state.colors = action.payload;
        },
        addToColors: (state, action) => {
            state.colors = [action.payload, ...state.colors];
        }
    }
});



export const { setColors, addToColors } = colorPalettes.actions;

export default colorPalettes.reducer;
