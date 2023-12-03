import { fetchAtcionTypes } from "../actions/actions";

interface ticketState {
    sessionId: string,
    tickets: any[];
    loading: boolean;
    error: null | string;
}

const initialState = {
    sessionId: '',
    tickets: [],
    loading: false,
    error: null,
}

export const fetchReducer = (state: ticketState = initialState, action: any) => {
    switch (action.type) {
      case fetchAtcionTypes.FETCH_TICKETS_SEARCH_ID:
        return {
            ...state,
            sessionId: action.payload,
        }
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
        };
      case fetchAtcionTypes.FETCH_TICKETS_ERROR:
        return {
          ...state,
          loading: false,
          tickets: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
