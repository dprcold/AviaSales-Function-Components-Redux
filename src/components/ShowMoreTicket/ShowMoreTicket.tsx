import React from 'react';

import { ActionTypes } from '../../redux/actions/actions';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import style from './ShowMoreTicket.module.scss';

export const ShowMoreTicket: React.FC = () => {
  const dispatch = useAppDispatch();
  const onButtonClick: React.MouseEventHandler<HTMLDivElement> = () => {
    dispatch({ type: ActionTypes.COUNTER_FOOTER_BUTTON });
  };

  return (
    <>
      <div className={style.container} onClick={onButtonClick}>
        Показать еще 5 билетов!
      </div>
    </>
  );
};
