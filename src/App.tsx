import React from 'react';
import { Provider } from 'react-redux';

import Logo from '../src/components/assets/Logo.png';

import { store } from './redux/store';
import { FilterCheckboxGroup } from './components/FilterCheckboxGroup/FilterCheckboxGroup';
import style from './App.module.scss';
import { FilterButtonGroup } from './components/FilterButtonGroup/FilterButtonGroup';
import { ShowMoreTicket } from './components/ShowMoreTicket/ShowMoreTicket';
import { TicketList } from './components/TicketList/TicketList';
export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={style.appWrapper}>
        <div className={style.logoWrapper}>
          <div className={style.logo}>
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className={style.contentWrapper}>
          <FilterCheckboxGroup />
          <div className={style.contentTicketsButtonsWrapper}>
            <FilterButtonGroup />
            <TicketList />
            <ShowMoreTicket />
          </div>
        </div>
      </div>
    </Provider>
  );
};
