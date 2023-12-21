import { createSelector } from 'reselect';

import { RootState } from '../combineReducers';
import { ticketType } from '../../types/types';

const checkboxAll = (state: RootState) => state.ui.checkboxAll;
const checkboxNoTransfers = (state: RootState) => state.ui.checkboxNoTransfers;
const checkboxOneTransfers = (state: RootState) => state.ui.checkboxOneTransfers;
const checkboxTwoTransfers = (state: RootState) => state.ui.checkboxTwoTransfers;
const checkboxThreeTransfers = (state: RootState) => state.ui.checkboxThreeTransfers;
const sortButtonCheap = (state: RootState) => state.ui.sortButtonCheap;
const sortButtonFastest = (state: RootState) => state.ui.sortButtonFastest;
const sortButtonOptimal = (state: RootState) => state.ui.sortButtonOptimal;
const tickets = (state: RootState) => state.fetch.tickets;

export const getFormatedData = createSelector(
  [
    sortButtonOptimal,
    sortButtonFastest,
    sortButtonCheap,
    checkboxThreeTransfers,
    checkboxTwoTransfers,
    checkboxOneTransfers,
    checkboxNoTransfers,
    checkboxAll,
    tickets,
  ],
  (
    sortButtonOptimalVal,
    sortButtonFastestVal,
    sortButtonCheapVal,
    checkboxThreeTransfersVal,
    checkboxTwoTransfersVal,
    checkboxOneTransfersVal,
    checkboxNoTransfersVal,
    checkboxAllVal,
    ticketsVal
  ) => {
    if (!ticketsVal) {
      return [];
    }
    const filteredTickets = ticketsVal.filter((ticket: ticketType) => {
      const stopsCount = ticket.segments.reduce((acc: number, segment) => acc + segment.stops.length, 0);

      return (
        checkboxAllVal ||
        (!checkboxAllVal && checkboxNoTransfersVal && stopsCount === 0) ||
        (!checkboxAllVal && checkboxOneTransfersVal && stopsCount === 1) ||
        (!checkboxAllVal && checkboxTwoTransfersVal && stopsCount === 2) ||
        (!checkboxAllVal && checkboxThreeTransfersVal && stopsCount === 3)
      );
    });
    if (sortButtonCheapVal) {
      filteredTickets.sort((a: ticketType, b: ticketType) => a.price - b.price);
    }
    if (sortButtonFastestVal) {
      filteredTickets.sort((a: ticketType, b: ticketType) => {
        const fastestSegmentA = Math.min(...a.segments.map((segment) => segment.duration));
        const fastestSegmentB = Math.min(...b.segments.map((segment) => segment.duration));

        return fastestSegmentA - fastestSegmentB;
      });
    }
    if (sortButtonOptimalVal) {
      filteredTickets.sort((a: ticketType, b: ticketType) => {
        const pricePerMinuteA =
          a.price / a.segments.reduce((acc: number, cur: { duration: number }) => (acc += cur.duration), 0);
        const pricePerMinuteB =
          b.price / b.segments.reduce((acc: number, cur: { duration: number }) => (acc += cur.duration), 0);
        return pricePerMinuteA - pricePerMinuteB;
      });
    }
    return filteredTickets;
  }
);
