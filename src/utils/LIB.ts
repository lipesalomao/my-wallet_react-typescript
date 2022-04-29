export const CombineReducer = (reducers: any) => (state: any = {}, action: any) => {
    const newState: any = {};

    for (const key in reducers) {
        newState[key] = reducers[key](state[key], action);
    }
    return newState;
};