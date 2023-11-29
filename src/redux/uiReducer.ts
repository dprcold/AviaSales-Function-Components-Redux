import { ActionTypes } from './actions';

interface uiState {
  checkboxAll: boolean;
  checkboxNoTransfers: boolean;
  checkboxOneTransfers: boolean;
  checkboxTwoTransfers: boolean;
  checkboxThreeTransfers: boolean;
}

const initialState = {
  checkboxAll: false,
  checkboxNoTransfers: false,
  checkboxOneTransfers: false,
  checkboxTwoTransfers: false,
  checkboxThreeTransfers: false,
};

export const uiReducer = (state: uiState = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_ALL_CHECKBOX_TRUE:
      return {
        ...state,
        checkboxAll: true,
        checkboxNoTransfers: true,
        checkboxOneTransfers: true,
        checkboxTwoTransfers: true,
        checkboxThreeTransfers: true,
      };
    case ActionTypes.SET_ALL_CHECKBOX_FALSE:
      return {
        ...state,
        checkboxAll: false,
      };
    case ActionTypes.SET_CHECKBBOX_NO_TRANSFERS:
      return {
        ...state,
        checkboxNoTransfers: !state.checkboxNoTransfers,
        checkboxAll: false,
      };
    case ActionTypes.SET_CHECKBOX_ONE_TRANSFER:
      return {
        ...state,
        checkboxOneTransfers: !state.checkboxOneTransfers,
        checkboxAll: false,
      };
    case ActionTypes.SET_CHECKBOX_TWO_TRANSFERS:
      return {
        ...state,
        checkboxTwoTransfers: !state.checkboxTwoTransfers,
        checkboxAll: false,
      };
    case ActionTypes.SET_CHECKBOX_THREE_TRANSFERS:
      return {
        ...state,
        checkboxThreeTransfers: !state.checkboxThreeTransfers,
        checkboxAll: false,
      };
    default:
      return state;
  }
};
