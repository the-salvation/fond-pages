/* eslint-disable indent */
import ConsultPic1 from '../assets/images/consult/c1.jpg';
const SET_GETCONSULT = 'SET_GETCONSULT';
const initialState = {
  partOfState: {
    id: 'Consult',
    name: 'Consult',
    t1: ' ',
    p1: 'Ви можете отримати безкоштовну анонімну консультацію з питань, пов’язаних із вживанням наркотиків. Зателефонуйте за номером (057)714-31-77 або напишіть листа на адресу fondnn.ukr@gmail.com',
    pic1: ConsultPic1,
  }
};

const getConsultReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GETCONSULT: {
      return { visibility: true, partOfState: initialState[action.id] };


    }
    default:
      return { ...state };
  }
};

export const setConsultAC = id => ({ type: SET_GETCONSULT, id });

export default getConsultReducer;