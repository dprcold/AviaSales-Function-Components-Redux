import React, { useState } from 'react';

import { useTypeSelector } from '../../hooks/useTypeSelector';
import { ActionTypes } from '../../redux/actions/actions';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import styles from './SortButtonGroup.module.scss';

enum SortButtonGroupIds {
  Cheap = 1,
  Fastest = 2,
  Optimal = 3,
}

export const SortButtonGroup: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number>();
  const uiState = useTypeSelector((state) => state.ui);
  const dispatch = useAppDispatch();
  const buttons = [
    { id: SortButtonGroupIds.Cheap, name: 'Самый дешевый', state: uiState.sortButtonCheap },
    { id: SortButtonGroupIds.Fastest, name: 'Самый быстрый', state: uiState.sortButtonFastest },
    { id: SortButtonGroupIds.Optimal, name: 'Оптимальный', state: uiState.sortButtonOptimal },
  ];
  const buttonClick = (index: number, buttonID: number) => {
    if (buttonID === SortButtonGroupIds.Cheap) {
      dispatch({ type: ActionTypes.SET_SORT_BUTTON_CHEAP });
    }
    if (buttonID === SortButtonGroupIds.Fastest) {
      dispatch({ type: ActionTypes.SET_SORT_BUTTON_FASTEST });
    }
    if (buttonID === SortButtonGroupIds.Optimal) {
      dispatch({ type: ActionTypes.SET_SORT_BUTTON_OPTIMAL });
    }
    setSelectedButton(index);
  };
  return (
    <div className={styles.containerButtons}>
      {buttons.map((button, index) => (
        <button
          key={button.id}
          className={selectedButton === index ? styles.buttonPainted : styles.button}
          onClick={() => buttonClick(index, button.id)}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};
