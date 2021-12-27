import { store } from '../redux/store';

export type RootState = ReturnType<typeof store.getState>;

export type RootStateFunc = () => RootState;

export type AppDispatch = typeof store.dispatch;
