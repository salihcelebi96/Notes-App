import { configureStore } from '@reduxjs/toolkit';
import inputReducer from '../reducers/inputReducer';

// Store durumu için bir tür (type) tanımlayın (bu, projenizin yapısına göre ayarlanmalıdır).
type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    input: inputReducer,
  },
});

export default store;

// RootState'i dışarıya aktarın ki diğer bileşenlerde kullanabilelim.
export type { RootState };
