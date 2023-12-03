import { ActionTypes } from '../actions/actions';

interface uiState {
  checkboxAll: boolean;
  checkboxNoTransfers: boolean;
  checkboxOneTransfers: boolean;
  checkboxTwoTransfers: boolean;
  checkboxThreeTransfers: boolean;
  footerButtonCount: number;
  buttonMoreTickets: boolean;
  showAlertModal: boolean;
  sortButtonCheap: boolean;
  sortButtonFastest: boolean;
  sortButtonOptimal: boolean;
}

const initialState = {
  checkboxAll: true,
  checkboxNoTransfers: true,
  checkboxOneTransfers: true,
  checkboxTwoTransfers: true,
  checkboxThreeTransfers: true,
  footerButtonCount: 5,
  buttonMoreTickets: false,
  showAlertModal: false,
  sortButtonCheap: false,
  sortButtonFastest: false,
  sortButtonOptimal: false,
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
      };
    case ActionTypes.SET_CHECKBOX_NAME_NO_TRANSFERS:
      return {
        ...state,
        checkboxNoTransfers: !state.checkboxNoTransfers,
      };
    case ActionTypes.SET_CHECKBOX_NAME_ONE_TRANSFER:
      return {
        ...state,
        checkboxOneTransfers: !state.checkboxOneTransfers,
      };
    case ActionTypes.SET_CHECKBOX_NAME_TWO_TRANSFERS:
      return {
        ...state,
        checkboxTwoTransfers: !state.checkboxTwoTransfers,
      };
    case ActionTypes.SET_CHECKBOX_NAME_THREE_TRANFERS:
      return {
        ...state,
        checkboxThreeTransfers: !state.checkboxThreeTransfers,
      };
    case ActionTypes.SET_CHECKBOX_NAME_ALL_TO_TRUE:
      return {
        ...state,
        checkboxAll: true,
      };
    case ActionTypes.SET_CHECKBOX_NAME_ALL_TO_FALSE:
      return {
        ...state,
        checkboxAll: false,
      };
    case ActionTypes.SET_CHECKBOX_NAME_ALL_REVERSE:
      return {
        ...state,
        checkboxAll: false,
        checkboxNoTransfers: false,
        checkboxOneTransfers: false,
        checkboxTwoTransfers: false,
        checkboxThreeTransfers: false,
      };
    case ActionTypes.COUNTER_FOOTER_BUTTON:
      return {
        ...state,
        footerButtonCount: state.footerButtonCount + 5,
      };
    case ActionTypes.SHOW_MORE_TICKETS_BUTTON:
      return {
        ...state,
        buttonMoreTickets: true,
      };
    case ActionTypes.HIDE_MORE_TICKETS_BUTTON:
      return {
        ...state,
        buttonMoreTickets: false,
      };
    case ActionTypes.SHOW_ALERT_MODAL:
      return {
        ...state,
        showAlertModal: true,
      };
    case ActionTypes.HIDE_ALERT_MODAL:
      return {
        ...state,
        showAlertModal: false,
      };
    case ActionTypes.SET_SORT_BUTTON_CHEAP:
      return {
        ...state,
        sortButtonCheap: true,
        sortButtonFastest: false,
        sortButtonOptimal: false,
      };
    case ActionTypes.SET_SORT_BUTTON_FASTEST:
      return {
        ...state,
        sortButtonFastest: true,
        sortButtonCheap: false,
        sortButtonOptimal: false,
      };
    case ActionTypes.SET_SORT_BUTTON_OPTIMAL:
      return {
        ...state,
        sortButtonOptimal: true,
        sortButtonFastest: false,
        sortButtonCheap: false,
      };
    default:
      return state;
  }
};
