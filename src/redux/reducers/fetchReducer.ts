import { fetchAtcionTypes } from '../actions/actions';
import { ticketState, uiAction } from '../../types/types';

const initialState = {
  sessionId: '',
  tickets: [],
  loading: false,
  error: null,
  showErrorModal: false,
};

export const fetchReducer = (state: ticketState = initialState, action: uiAction) => {
  switch (action.type) {
    case fetchAtcionTypes.FETCH_TICKETS_SEARCH_ID:
      return {
        ...state,
        sessionId: action.payload,
      };
    case fetchAtcionTypes.FETCH_TICKETS:
      return {
        ...state,
        loading: true,
      };
    case fetchAtcionTypes.FETCH_TICKETS_SUCCSESS:
      return {
        ...state,
        loading: false,
        tickets: action.payload,
        error: null,
        showErrorModal: false,
      };
    case fetchAtcionTypes.FETCH_TICKETS_ERROR:
      return {
        ...state,
        loading: false,
        tickets: [],
        error: action.payload,
        showErrorModal: true,
      };
    default:
      return state;
  }
};
