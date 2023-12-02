import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import s7Logo from '../assets/S7 Logo.png';

import style from './TicketList.module.scss';
import { useTypeSelector } from '../../hooks/useTypeSelector';

import { Ticket } from '../../types/types'

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
  
  const { footerButtonCount } = useTypeSelector(state => state.ui)
  console.log(footerButtonCount)
  const { tickets } = useTypeSelector(state => state.fetch)
  console.log( tickets)
  return (
    <>
      {tickets
        ? tickets.slice(0,footerButtonCount).map((item: Ticket) => (
            <div className={style.ticketContainer} key={uuidv4()}>
              <div className={style.priceLogoWrapper}>
                <span className={style.price}>{item.price.toLocaleString('ru-Ru')} р</span>
                <img className={style.logo} src={s7Logo} alt="S7 Logo" />
              </div>
              <div className={style.contentTransferFirst}>
                <div className={style.timeInfo}>
                  <span className={style.citys}>{item.segments[0].origin} – {item.segments[0].destination}</span>
                  <span className={style.flightTime}>10:45 – 08:00</span>
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
                  <span className={style.flightTime}>11:20 – 00:50</span>
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
