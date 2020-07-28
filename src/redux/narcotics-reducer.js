const SET_NARCOTIC = "SET_NARCOTIC";
// const IS_OPIUM = "IS_OPIUM";
// const IS_DURMAN = "IS_DURMAN";
// const IS_BARBITURATI = "IS_BARBITURATI";
// const IS_KONOPLI = "IS_KONOPLI";
// const IS_ALCOHOL = "IS_ALCOHOL";
// const IS_LSD = "IS_LSD";
// const IS_COCAINE = "IS_COCAINE";

const initialState = {
    // Opiumm: {visibility: false},
    // Barbituratii: {visibility: false},
    partOfState: ''
};

const narcoticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NARCOTIC: {
            switch (action.id) {
                case "Opiumm": {
                    return { ...initialState, Opiumm: { visibility: true}, partOfState: action.partOfState};
                }
                case "Barbituratii": {
                    return { ...initialState, Barbituratii: { visibility: true}, partOfState: action.partOfState};
                }
                case "Lsd": {
                    return { ...initialState, Lsd: { visibility: true}, partOfState: action.partOfState};
                }
                case "Cocaine": {
                    return { ...initialState, Cocaine: { visibility: true}, partOfState: action.partOfState};
                }
                case "Durman": {
                    return { ...initialState, Durman: { visibility: true}, partOfState: action.partOfState};
                }
                case "DMAA": {
                    return { ...initialState, DMAA: { visibility: true}, partOfState: action.partOfState};
                }
                case "MDMA": {
                    return { ...initialState, MDMA: { visibility: true}, partOfState: action.partOfState};
                }
                case "Alcohol": {
                    return { ...initialState, Alcohol: { visibility: true}, partOfState: action.partOfState};
                }
                case "Konopli": {
                    return { ...initialState, Konopli: { visibility: true}, partOfState: action.partOfState};
                }
                case "Tramadol": {
                    return { ...initialState, Tramadol: { visibility: true}, partOfState: action.partOfState};
                }
                case "BookLecture": {
                    return { ...initialState, BookLecture: { visibility: true}, partOfState: action.partOfState};
                }
                case "FAQ": {
                    return { ...initialState, FAQ: { visibility: true}, partOfState: action.partOfState};
                }
                case "Toxic": {
                    return { ...initialState, Toxic: { visibility: true}, partOfState: action.partOfState};
                }
                case "Ephedrin": {
                    return { ...initialState, Ephedrin: { visibility: true}, partOfState: action.partOfState};
                }
                default:
                    return state;
            }
        }
        default:
            return {...state};
    }
};

export const setNarcoticAC = (id, partOfState) => ({type: SET_NARCOTIC, id, partOfState});

export default narcoticsReducer;
