import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import kanyeReducer from '../features/kanye/kanyeSlice';
import animeReducer from '../features/anime/animeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    kanyeQuote: kanyeReducer,
    anime: animeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;