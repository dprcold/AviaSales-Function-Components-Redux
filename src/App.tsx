import React, { useEffect } from 'react';
import { Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import Logo from './assets/Logo.png';
import { ChakraWrapper } from './ChakraWrapper';
import { FilterCheckboxGroup } from './components/FilterCheckboxGroup/FilterCheckboxGroup';
import style from './App.module.scss';
import { SortButtonGroup } from './components/FilterButtonGroup/SortButtonGroup';
import { ShowMoreTicket } from './components/ShowMoreTicket/ShowMoreTicket';
import { TicketList } from './components/TicketList/TicketList';
import { Loader } from './components/loader/loader';
import { getSessionID, getTickets } from './redux/action-creators/fetchTickets';
import { useTypeSelector } from './hooks/useTypeSelector';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const { sessionId, loading, showErrorModal } = useTypeSelector((state) => state.fetch);
  const { buttonMoreTickets, showAlertModal } = useTypeSelector((state) => state.ui);

  useEffect(() => {
    dispatch(getSessionID() as any);
    console.log('айди получено');
  }, []);
  useEffect(() => {
    if (sessionId) {
      dispatch(getTickets(sessionId) as any);
      console.log('билеты получены');
    }
  }, [sessionId]);

  return (
    <ChakraWrapper>
      <div className={style.appWrapper}>
        <div className={style.logoWrapper}>
          <div className={style.logo}>
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className={style.contentWrapper}>
          <FilterCheckboxGroup />
          <div className={style.contentTicketsButtonsWrapper}>
            <SortButtonGroup />
            {showAlertModal ? (
              <Alert status="info">
                <AlertIcon />
                <AlertDescription>Не удалось найти билет, выберите параметры поиска</AlertDescription>
              </Alert>
            ) : null}
            {showErrorModal ? (
              <Alert status="warning">
                <AlertIcon />
                <AlertDescription>Произошла ошибка при получении билетов</AlertDescription>
              </Alert>
            ) : null}
            {loading ? <Loader /> : null}

            <TicketList />
            {buttonMoreTickets ? <ShowMoreTicket /> : null}
          </div>
        </div>
      </div>
    </ChakraWrapper>
  );
};
