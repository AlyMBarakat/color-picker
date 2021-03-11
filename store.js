import { configureStore } from '@reduxjs/toolkit';
import colorPalettesReducer from './slices/colorPalettes';

export default configureStore({
    reducer: {
        colorPalettes: colorPalettesReducer,
    }
});
