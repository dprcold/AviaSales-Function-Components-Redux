import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useTypeSelector } from '../../hooks/useTypeSelector';
import { ticketType } from '../../types/types';
import { ActionTypes } from '../../redux/actions/actions';
import { Ticket } from '../Ticket/Ticket';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getFormatedData } from '../../redux/selectors/ticketsSelector';

export const TicketList: React.FC = () => {
  const [filteredTickets, setFilteredTickets] = useState<ticketType[]>([]);

  const { footerButtonCount, checkboxAll } = useTypeSelector((state) => state.ui);
  const formattedTickets: any[] = useTypeSelector(getFormatedData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setFilteredTickets(formattedTickets.slice(0, footerButtonCount));
  }, [footerButtonCount, formattedTickets]);

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
