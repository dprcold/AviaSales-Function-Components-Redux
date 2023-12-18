import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useTypeSelector } from '../../hooks/useTypeSelector';
import { ticketType } from '../../types/types';
import { ActionTypes } from '../../redux/actions/actions';
import { Ticket } from '../Ticket/Ticket';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const TicketList: React.FC = () => {
  const [filteredTickets, setFilteredTickets] = useState<ticketType[]>([]);
  const {
    footerButtonCount,
    checkboxAll,
    checkboxNoTransfers,
    checkboxOneTransfers,
    checkboxTwoTransfers,
    checkboxThreeTransfers,
    sortButtonCheap,
    sortButtonFastest,
    sortButtonOptimal,
  } = useTypeSelector((state) => state.ui);
  const { tickets } = useTypeSelector((state) => state.fetch);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (tickets) {
      const filteredTickets = tickets.filter((ticket: ticketType) => {
        const stopsCount = ticket.segments.reduce((acc: number, segment) => acc + segment.stops.length, 0);

        return (
          checkboxAll ||
          (!checkboxAll && checkboxNoTransfers && stopsCount === 0) ||
          (!checkboxAll && checkboxOneTransfers && stopsCount === 1) ||
          (!checkboxAll && checkboxTwoTransfers && stopsCount === 2) ||
          (!checkboxAll && checkboxThreeTransfers && stopsCount === 3)
        );
      });
      if (sortButtonCheap) {
        filteredTickets.sort((a: ticketType, b: ticketType) => a.price - b.price);
      }
      if (sortButtonFastest) {
        filteredTickets.sort((a: ticketType, b: ticketType) => {
          const fastestSegmentA = Math.min(...a.segments.map((segment) => segment.duration));
          const fastestSegmentB = Math.min(...b.segments.map((segment) => segment.duration));

          return fastestSegmentA - fastestSegmentB;
        });
      }
      if (sortButtonOptimal) {
        filteredTickets.sort((a: ticketType, b: ticketType) => {
          const sumA =
            a.segments.reduce((acc: number, cur: { duration: number }) => (acc += cur.duration), 0) + a.price;
          const sumB =
            b.segments.reduce((acc: number, cur: { duration: number }) => (acc += cur.duration), 0) + b.price;
          if (sumA > sumB) {
            return 1;
          } else {
            return -1;
          }
        });
      }
      setFilteredTickets(filteredTickets.slice(0, footerButtonCount));
    }
  }, [
    tickets,
    checkboxAll,
    checkboxNoTransfers,
    checkboxOneTransfers,
    checkboxTwoTransfers,
    checkboxThreeTransfers,
    sortButtonCheap,
    sortButtonFastest,
    sortButtonOptimal,
    footerButtonCount,
  ]);

  useEffect(() => {
    if (filteredTickets && !filteredTickets.length && !checkboxAll) {
      dispatch({ type: ActionTypes.SHOW_ALERT_MODAL });
    } else {
      dispatch({ type: ActionTypes.HIDE_ALERT_MODAL });
    }
    if (filteredTickets.length === 0) {
      dispatch({ type: ActionTypes.HIDE_MORE_TICKETS_BUTTON });
    } else {
      dispatch({ type: ActionTypes.SHOW_MORE_TICKETS_BUTTON });
    }
  }, [filteredTickets, checkboxAll]);

  return (
    <div>
      {filteredTickets
        ? filteredTickets.map((item: ticketType) => (
            <Ticket key={uuidv4()} price={item.price} segments={item.segments} carrier={item.carrier} />
          ))
        : null}
    </div>
  );
};
