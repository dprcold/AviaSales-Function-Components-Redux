import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addMinutes } from 'date-fns';

import style from './TicketList.module.scss';
import { useTypeSelector } from '../../hooks/useTypeSelector';

import { Ticket } from '../../types/types'
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../redux/actions/actions';


const formatDuration = (duration: number): string => {
  const hours = Math.floor(duration / 60)
  const min = duration % 60
  return `${hours}ч ${min}м`
};
const formatStopsWord = (stopsCount: number): string => {
  if (stopsCount === 0) {
    return "без пересадок";
  } else if (stopsCount === 1) {
    return "1 пересадка";
  } else if (stopsCount >= 2 && stopsCount <= 4) {
    return `${stopsCount} пересадки`;
  } else {
    return `${stopsCount} пересадок`;
  }
}


export const TicketList: React.FC = () => {
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([])
  const { footerButtonCount, checkboxAll, checkboxNoTransfers, checkboxOneTransfers, checkboxTwoTransfers, checkboxThreeTransfers } = useTypeSelector(state => state.ui)
  const { tickets } = useTypeSelector(state => state.fetch);
  const dispatch = useDispatch()

  useEffect(() => {
    if (tickets) {
     
      const filtered = tickets.filter((ticket:any) => {
        
        const stopsCount = ticket.segments.reduce((acc:number, segment:any) => acc + segment.stops.length, 0);
  
        return (
          (checkboxAll || (!checkboxAll && checkboxNoTransfers && stopsCount === 0) ||
          (!checkboxAll && checkboxOneTransfers && stopsCount === 1) ||
          (!checkboxAll && checkboxTwoTransfers && stopsCount === 2) ||
          (!checkboxAll && checkboxThreeTransfers && stopsCount === 3))
        );
      });
  
      setFilteredTickets(filtered);
    }
    

  }, [tickets, checkboxAll, checkboxNoTransfers, checkboxOneTransfers, checkboxTwoTransfers, checkboxThreeTransfers]);
 
  useEffect(() => {
    if (filteredTickets && filteredTickets.length > 5) {
      dispatch({ type: ActionTypes.SHOW_MORE_TICKETS_BUTTON });
    } else {
      dispatch({ type: ActionTypes.HIDE_MORE_TICKETS_BUTTON });
    }
  }, [filteredTickets]);
  useEffect(() => {
    if(filteredTickets && !filteredTickets.length && !checkboxAll){
      dispatch({ type: ActionTypes.SHOW_ALERT_MODAL });
    } else {
      dispatch({ type: ActionTypes.HIDE_ALERT_MODAL });
    }
  },[filteredTickets])
  
  


  return (
    <>
      {filteredTickets
        ? filteredTickets.slice(0,footerButtonCount).map((item: Ticket) => (
            <div className={style.ticketContainer} key={uuidv4()}>
              <div className={style.priceLogoWrapper}>
                <span className={style.price}>{item.price.toLocaleString('ru-Ru')} р</span>
                <img className={style.logo} src={`//pics.avs.io/110/36/${item.carrier}.png`} alt="logo" />
              </div>
              <div className={style.contentTransferFirst}>
                <div className={style.timeInfo}>
                  <span className={style.citys}>{item.segments[0].origin} – {item.segments[0].destination}</span>
                  <span className={style.flightTime}>
                  {`${new Date(item.segments[0].date).toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'})} – 
                  ${addMinutes(new Date(item.segments[0].date), item.segments[1].duration).toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'})}`}
                </span>
                </div>
                <div className={style.timeInfo}>
                  <span className={style.duration}>В пути</span>
                  <span className={style.flightTime}>{formatDuration(item.segments[0].duration)}</span>
                </div>
                <div className={style.timeInfo}>
                  <span className={style.citys}>{formatStopsWord(item.segments[0].stops.length)}</span>
                  <span className={style.stops}>{item.segments[0].stops.length ? item.segments[0].stops.join(', '): null}</span>
                </div>
              </div>
              <div className={style.contentTransferSecond}>
                <div className={style.timeInfo}>
                  <span className={style.citys}>{item.segments[1].origin} – {item.segments[1].destination}</span>
                  <span className={style.flightTime}>
                  {`${new Date(item.segments[1].date).toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'})} – 
                  ${addMinutes(new Date(item.segments[1].date), item.segments[1].duration).toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'})}`}
                </span>
                </div>
                <div className={style.timeInfo}>
                  <span className={style.duration}>В пути</span>
                  <span className={style.flightTime}>{formatDuration(item.segments[1].duration)}</span>
                </div>
                <div className={style.timeInfo}>
                  <span className={style.citys}>{formatStopsWord(item.segments[1].stops.length)}</span>
                  <span className={style.stops}>{item.segments[1].stops.length ? item.segments[1].stops.join(', '): null}</span>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
};
