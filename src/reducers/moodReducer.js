import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY, GET_DRUNK } from '../actions/moodActions';

const initialState = { coffees: 0, snacks: 0, naps: 0, study: 0, drunk: 0 };
  
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    case EAT_SNACK:
      return { ...state, snacks: state.snacks + 1 };
    case TAKE_NAP:
      return { ...state, naps: state.naps + 1 };
    case STUDY:
      return { ...state, study: state.study + 1 };
    case GET_DRUNK:
      return { ...state, drunk: state.drunk + 1 };
    default:
      return state;
  }
}
