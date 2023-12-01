import React from 'react';

import s7Logo from '../assets/S7 Logo.png';

import style from './TicketList.module.scss';

export const TicketList: React.FC = () => {
  return (
    <>

      <div className={style.ticketContainer}>
        <div className={style.priceLogoWrapper}>
          <span className={style.price}>13 400 р</span>
          <img className={style.logo} src={s7Logo} />
        </div>
        <div className={style.contentTransferFirst}>
          <div className={style.timeInfo}>
            <span className={style.citys}>MOW – HKT</span>
            <span className={style.flightTime}>10:45 – 08:00</span>
          </div>
          <div className={style.timeInfo}>
            <span className={style.citys}>В пути</span>
            <span className={style.flightTime}>21ч 15м</span>
          </div>
          <div className={style.timeInfo}>
            <span className={style.citys}>2 пересадки</span>
            <span className={style.flightTime}>HKG, JNB</span>
          </div>
        </div>
        <div className={style.contentTransferSecond}>
          <div className={style.timeInfo}>
            <span className={style.citys}>MOW – HKT</span>
            <span className={style.flightTime}>11:20 – 00:50</span>
          </div>
          <div className={style.timeInfo}>
            <span className={style.citys}>В пути</span>
            <span className={style.flightTime}>13ч 30м</span>
          </div>
          <div className={style.timeInfo}>
            <span className={style.citys}>2 пересадки</span>
            <span className={style.flightTime}>HKG</span>
          </div>
        </div>
      </div>
    </>
  );
};
