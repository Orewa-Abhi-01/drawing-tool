// File: app/redux/features/menuSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { MENU_ITEMS } from '@/utils/constants';

const initialState = {
  activeMenuItem: MENU_ITEMS.PENCIL,
  actionMenuItems: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setActiveMenuItem : (state, action) => {
      state.activeMenuItem = action.payload;
    },
    actionMenuItemsClick(state, action) {
      state.actionMenuItems = action.payload;
    }
   
  },
});

export const { setActiveMenuItem , actionMenuItemsClick} = menuSlice.actions;
export default menuSlice.reducer;
