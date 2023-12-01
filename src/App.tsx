import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ChakraWrapper } from './ChakraWrapper';
import Logo from '../src/components/assets/Logo.png';
import { store } from './redux/store';
import { FilterCheckboxGroup } from './components/FilterCheckboxGroup/FilterCheckboxGroup';
import style from './App.module.scss';
import { FilterButtonGroup } from './components/FilterButtonGroup/FilterButtonGroup';
import { ShowMoreTicket } from './components/ShowMoreTicket/ShowMoreTicket';
import { TicketList } from './components/TicketList/TicketList';
import { Loader } from './components/loader/loader';
import { useDispatch } from 'react-redux';
import { getSessionID, getTickets } from './redux/action-creators/fetchTickets';
import { useTypeSelector } from './hooks/useTypeSelector';
export const App: React.FC = () => {
  const dispatch = useDispatch()
  const {sessionId, loading, buttonMoreTickets} = useTypeSelector(state => state.fetch)


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
            <FilterButtonGroup />
            {loading ? <Loader /> : null}
            <TicketList />
            {buttonMoreTickets? <ShowMoreTicket /> : null}
          </div>
        </div>
      </div>
      </ChakraWrapper>
  );
};
