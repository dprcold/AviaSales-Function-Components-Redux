import React, { useEffect } from 'react';

import { ChakraWrapper } from './ChakraWrapper';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import Logo from '../src/components/assets/Logo.png';

import { FilterCheckboxGroup } from './components/FilterCheckboxGroup/FilterCheckboxGroup';
import style from './App.module.scss';
import { SortButtonGroup } from './components/FilterButtonGroup/SortButtonGroup';
import { ShowMoreTicket } from './components/ShowMoreTicket/ShowMoreTicket';
import { TicketList } from './components/TicketList/TicketList';
import { Loader } from './components/loader/loader';
import { useDispatch } from 'react-redux';
import { getSessionID, getTickets } from './redux/action-creators/fetchTickets';
import { useTypeSelector } from './hooks/useTypeSelector';

export const App: React.FC = () => {
  const dispatch = useDispatch()
  const {sessionId, loading } = useTypeSelector(state => state.fetch)
  const {buttonMoreTickets, showAlertModal} = useTypeSelector(state => state.ui)


  useEffect(() => {
    dispatch(getSessionID() as any)
  },[])
  useEffect(() => {
    if(sessionId){
      dispatch(getTickets(sessionId)as any)
    }
  }, [sessionId])

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
            <Alert>
              <AlertIcon />
              <AlertTitle>:(</AlertTitle>
              <AlertDescription>Не удалось найти билет, выберите параметры поиска</AlertDescription>
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
