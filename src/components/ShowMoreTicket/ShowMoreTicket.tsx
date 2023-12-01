import React from 'react';

import style from './ShowMoreTicket.module.scss';

import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../redux/actions/actions';



export const ShowMoreTicket: React.FC = () => {

  const discpatch = useDispatch()
  const onButtonClick: React.MouseEventHandler<HTMLDivElement>= () => {
    discpatch({ type: ActionTypes.COUNTER_FOOTER_BUTTON })
  }
  
  return (
    <>
  
      <div className={style.container} onClick={onButtonClick}>Показать еще 5 билетов!</div>
    </>
  );
};
