import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputState {
  contentValue: string;
  titleValue: string;
  items: { id: number; title: string; content: string }[]; // Öğelerin dizisi, her öğe bir ID içerir
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
      // Yeni öğeyi diziye ekle
      state.items.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      // Belirtilen ID'ye sahip öğeyi sil
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setTitleValue, setContentValue, addNewItem, deleteItem } = inputSlice.actions;
export default inputSlice.reducer;
