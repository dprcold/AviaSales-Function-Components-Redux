import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import axios from 'axios';

import { fetchAtcionTypes } from '../actions/actions';
import { RootState } from '../combineReducers';

const GET_SESSION_ID_URL = 'https://aviasales-test-api.kata.academy/search';
const GET_TICKETS_URL = 'https://aviasales-test-api.kata.academy/tickets?searchId=';

export const getSessionID = (): ThunkAction<void, RootState, unknown, any> => {
  //@ts-ignore
  return async (dispatch: ThunkDispatch<RootState, void, any, any>) => {
    try {
      dispatch({ type: fetchAtcionTypes.FETCH_TICKETS });
      const response = await axios.get(GET_SESSION_ID_URL);
      const searchId = response.data.searchId;
      dispatch({ type: fetchAtcionTypes.FETCH_TICKETS_SEARCH_ID, payload: searchId });
    } catch (error) {
      dispatch({ type: fetchAtcionTypes.FETCH_TICKETS_ERROR, payload: 'Проверьте подключение к сети :(' });
    }
  };
};
export const getTickets = (sessionId: string): ThunkAction<void, RootState, unknown, any> => {
  //@ts-ignore
  return async (dispatch: ThunkDispatch<RootState, void, any, any>) => {
    try {
      dispatch({ type: fetchAtcionTypes.FETCH_TICKETS });
      const response = await axios.get(`${GET_TICKETS_URL}${sessionId}`);
      const resultData = response.data.tickets;
      dispatch({ type: fetchAtcionTypes.FETCH_TICKETS_SUCCSESS, payload: resultData });
    } catch (error) {
      dispatch({ type: fetchAtcionTypes.FETCH_TICKETS_ERROR, payload: 'Ошибка при получении билетов :(' });
    }
  };
};
