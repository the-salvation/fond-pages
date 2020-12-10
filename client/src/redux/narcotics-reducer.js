const SET_NARCOTIC = "SET_NARCOTIC";

const initialState = {
    partOfState: ''
};

const narcoticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NARCOTIC: {
            switch (action.id) {
                case "Opium": {
                    return { ...initialState, Opium: { visibility: true}, partOfState: action.partOfState};
                }
                case "Barbiturati": {
                    return { ...initialState, Barbiturati: { visibility: true}, partOfState: action.partOfState};
                }
                case "Lsd": {
                    return { ...initialState, Lsd: { visibility: true}, partOfState: action.partOfState};
                }
                case "Salt": {
                    return { ...initialState, Salt: { visibility: true}, partOfState: action.partOfState};
                }
                case "Cocaine": {
                    return { ...initialState, Cocaine: { visibility: true}, partOfState: action.partOfState};
                }
                case "Heroine": {
                    return { ...initialState, Heroine: { visibility: true}, partOfState: action.partOfState};
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
                case "Consult": {
                    return { ...initialState, Consult: { visibility: true}, partOfState: action.partOfState};
                }
                case "FAQ": {
                    return { ...initialState, FAQ: { visibility: true}, partOfState: action.partOfState};
                }
                case "AboutUs": {
                    return { ...initialState, AboutUs: { visibility: true}, partOfState: action.partOfState};
                }
                case "Toxic": {
                    return { ...initialState, Toxic: { visibility: true}, partOfState: action.partOfState};
                }
                case "Ephedrin": {
                    return { ...initialState, Ephedrin: { visibility: true}, partOfState: action.partOfState};
                }
                case "Pervitin": {
                    return { ...initialState, Pervitin: { visibility: true}, partOfState: action.partOfState};
                }
                case "Poppy": {
                    return { ...initialState, Poppy: { visibility: true}, partOfState: action.partOfState};
                }
                case "Ketamine": {
                    return { ...initialState, Ketamine: { visibility: true}, partOfState: action.partOfState};
                }
                case "Morphine": {
                    return { ...initialState, Morphine: { visibility: true}, partOfState: action.partOfState};
                }
                case "Narcotics": {
                    return { ...initialState, Narcotics: { visibility: true}, partOfState: action.partOfState};
                }
                case "Meskalin": {
                    return { ...initialState, Meskalin: { visibility: true}, partOfState: action.partOfState};
                }
                case "Psylocibe": {
                    return { ...initialState, Psylocibe: { visibility: true}, partOfState: action.partOfState};
                }
                case "Fen": {
                    return { ...initialState, Fen: { visibility: true}, partOfState: action.partOfState};
                }
                case "Codeine": {
                    return { ...initialState, Codeine: { visibility: true}, partOfState: action.partOfState};
                }
                case "Methadone": {
                    return { ...initialState, Methadone: { visibility: true}, partOfState: action.partOfState};
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
