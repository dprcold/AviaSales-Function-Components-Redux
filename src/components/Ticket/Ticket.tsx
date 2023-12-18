import React from 'react';
import { addMinutes } from 'date-fns';

import { TicketProps } from '../../types/types';

import style from './Ticket.module.scss';

const formatDuration = (duration: number): string => {
  const hours = Math.floor(duration / 60);
  const min = duration % 60;
  return `${hours}ч ${min}м`;
};
const formatStopsWord = (stopsCount: number): string => {
  if (stopsCount === 0) {
    return 'без пересадок';
  } else if (stopsCount === 1) {
    return '1 пересадка';
  } else if (stopsCount >= 2 && stopsCount <= 4) {
    return `${stopsCount} пересадки`;
  } else {
    return `${stopsCount} пересадок`;
  }
};
const isNextDayDate = (dateLeft: Date, dateRight: Date): string | undefined => {
  const daysDifference = dateRight.getDate() - dateLeft.getDate();
  if (daysDifference) {
    return ' +1';
  }
};

export const Ticket: React.FC<TicketProps> = ({ price, segments, carrier }) => {
  return (
    <div className={style.ticketContainer}>
      <div className={style.priceLogoWrapper}>
        <span className={style.price}>{price.toLocaleString('ru-Ru')} р</span>
        <img className={style.logo} src={`//pics.avs.io/110/36/${carrier}.png`} alt="logo" />
      </div>
      <div className={style.contentTransferFirst}>
        <div className={style.timeInfo}>
          <span className={style.citys}>
            {segments[0].origin} – {segments[0].destination}
          </span>
          <span className={style.flightTime}>
            {`${new Date(segments[0].date).toLocaleTimeString('ru-RU', {
              hour: '2-digit',
              minute: '2-digit',
            })} – 
            ${addMinutes(new Date(segments[0].date), segments[0].duration).toLocaleTimeString('ru-RU', {
              hour: '2-digit',
              minute: '2-digit',
            })}`}
            <span className={style.isNextDayDateColor}>
              {isNextDayDate(new Date(segments[0].date), addMinutes(new Date(segments[0].date), segments[0].duration))}
            </span>
          </span>
        </div>
        <div className={style.timeInfo}>
          <span className={style.duration}>В пути</span>
          <span className={style.flightTime}>{formatDuration(segments[0].duration)}</span>
        </div>
        <div className={style.timeInfo}>
          <span className={style.citys}>{formatStopsWord(segments[0].stops.length)}</span>
          <span className={style.stops}>{segments[0].stops.length ? segments[0].stops.join(', ') : null}</span>
        </div>
      </div>
      <div className={style.contentTransferSecond}>
        <div className={style.timeInfo}>
          <span className={style.citys}>
            {segments[1].origin} – {segments[1].destination}
          </span>
          <span className={style.flightTime}>
            {`${new Date(segments[1].date).toLocaleTimeString('ru-RU', {
              hour: '2-digit',
              minute: '2-digit',
            })} – 
            ${addMinutes(new Date(segments[1].date), segments[1].duration).toLocaleTimeString('ru-RU', {
              hour: '2-digit',
              minute: '2-digit',
            })}`}
            <span className={style.isNextDayDateColor}>
              {isNextDayDate(new Date(segments[1].date), addMinutes(new Date(segments[1].date), segments[1].duration))}
            </span>
          </span>
        </div>
        <div className={style.timeInfo}>
          <span className={style.duration}>В пути</span>
          <span className={style.flightTime}>{formatDuration(segments[1].duration)}</span>
        </div>
        <div className={style.timeInfo}>
          <span className={style.citys}>{formatStopsWord(segments[1].stops.length)}</span>
          <span className={style.stops}>{segments[1].stops.length ? segments[1].stops.join(', ') : null}</span>
        </div>
      </div>
    </div>
  );
};
