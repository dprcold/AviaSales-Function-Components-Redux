import { ActionTypes } from '../actions/actions';

interface uiState {
  checkboxAll: boolean;
  checkboxNoTransfers: boolean;
  checkboxOneTransfers: boolean;
  checkboxTwoTransfers: boolean;
  checkboxThreeTransfers: boolean;
  footerButtonCount: number;
}

const initialState = {
  checkboxAll: false,
  checkboxNoTransfers: false,
  checkboxOneTransfers: false,
  checkboxTwoTransfers: false,
  checkboxThreeTransfers: false,
  footerButtonCount: 5,
};

export const uiReducer = (state: uiState = initialState, action: any) => {
  switch (action.type) {
   case ActionTypes.SET_CHECKBOX_NAME_ALL:
    return {
      ...state,
      checkboxAll: true,
      checkboxNoTransfers: true,
      checkboxOneTransfers: true,
      checkboxTwoTransfers: true,
      checkboxThreeTransfers: true,
    }
   case ActionTypes.SET_CHECKBOX_NAME_NO_TRANSFERS: 
    return {
      ...state,
      checkboxNoTransfers: !state.checkboxNoTransfers,
    }
    case ActionTypes.SET_CHECKBOX_NAME_ONE_TRANSFER: 
    return {
      ...state,
      checkboxOneTransfers: !state.checkboxOneTransfers,
    }
    case ActionTypes.SET_CHECKBOX_NAME_TWO_TRANSFERS: 
    return {
      ...state,
      checkboxTwoTransfers: !state.checkboxTwoTransfers,
    }
    case ActionTypes.SET_CHECKBOX_NAME_THREE_TRANFERS: 
    return {
      ...state,
      checkboxThreeTransfers: !state.checkboxThreeTransfers,
    }
    case ActionTypes.SET_CHECKBOX_NAME_ALL_TO_TRUE:
      return {
        ...state,
        checkboxAll: true,
      }
      case ActionTypes.SET_CHECKBOX_NAME_ALL_TO_FALSE:
        return {
          ...state, 
          checkboxAll: false,
        }
        case ActionTypes.SET_CHECKBOX_NAME_ALL_REVERSE:
          return {
            ...state,
            checkboxAll: false,
            checkboxNoTransfers: false,
            checkboxOneTransfers: false,
            checkboxTwoTransfers: false,
            checkboxThreeTransfers: false,
          }
        case ActionTypes.COUNTER_FOOTER_BUTTON:
          return {
            ...state,
            footerButtonCount: state.footerButtonCount + 5,
          }
    default:
      return state;
  }
};
