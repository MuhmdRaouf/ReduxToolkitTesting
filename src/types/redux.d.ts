export type RootState = ReturnType<typeof store.getState>;

export type RootStateFunc = () => RootState;

export type AppDispatch = typeof store.dispatch;
