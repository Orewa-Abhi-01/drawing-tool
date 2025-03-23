import { createSlice } from '@reduxjs/toolkit';
import { MENU_ITEMS , commonColors } from '@/utils/constants';

const initialState = {
    [MENU_ITEMS.PENCIL]: {
        color: commonColors.WHITE,
        size: 10
    },
    [MENU_ITEMS.ERASER]: {
        color: commonColors.BLACK,
        size: 15
    },
    [MENU_ITEMS.UNDO]: {},
    [MENU_ITEMS.REDO]: {},
    [MENU_ITEMS.DOWNLOAD]: {},
   
  };

  export const toolboxSlice = createSlice({
    name: 'toolbox',
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state[action.payload.item].color = action.payload.color
        },
        changeBrushSize: (state, action) => {
            state[action.payload.item].size = action.payload.size
        },
    },
  });
  
  export const { changeColor, changeBrushSize } = toolboxSlice.actions;
  export default toolboxSlice.reducer;
  
// [MENU_ITEMS.CLEAR]: {}, AND MANY MORE..