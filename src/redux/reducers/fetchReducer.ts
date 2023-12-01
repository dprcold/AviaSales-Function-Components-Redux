import { fetchAtcionTypes } from "../actions/actions";

interface ticketState {
    sessionId: string,
    tickets: any[];
    loading: boolean;
    error: null | string;
    buttonMoreTickets: boolean;
}

const initialState = {
    sessionId: '',
    tickets: [],
    loading: false,
    error: null,
    buttonMoreTickets: false,
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
          buttonMoreTickets: true,
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
