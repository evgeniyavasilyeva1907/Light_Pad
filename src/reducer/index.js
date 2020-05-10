
const initialState = [{ power: false }, { power: false }, { power: false }, { power: false }];


function LightsReducer(state = initialState, action) {
    //debugger

    switch (action.type) {
        case 'ON_LIGHT':
            const index = action.payload.index;
            state[index].power = !state[index].power;
            return [...state]
        default:
            return state

    }

};
export default LightsReducer;