import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputState {
  contentValue: string;
  titleValue: string;
  items: { id: number; title: string; content: string }[]; 
}

const initialState: InputState = {
  contentValue: '',
  titleValue: '',
  items: [],
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setTitleValue: (state, action: PayloadAction<string>) => {
      state.titleValue = action.payload;
    },
    setContentValue: (state, action: PayloadAction<string>) => {
      state.contentValue = action.payload;
    },
    addNewItem: (state, action: PayloadAction<{ id: number; title: string; content: string }>) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // Yeni bir editItem reducer'ı ekleyin
    editItem: (state, action: PayloadAction<{ id: number; title: string; content: string }>) => {
      const { id, title, content } = action.payload;
      // Düzenlenen öğeyi bulun ve güncelleyin
      const editedItemIndex = state.items.findIndex((item) => item.id === id);
      if (editedItemIndex !== -1) {
        state.items[editedItemIndex] = { id, title, content };
      }
    },
  },
});

export const { setTitleValue, setContentValue, addNewItem, deleteItem, editItem } = inputSlice.actions;
export default inputSlice.reducer;
