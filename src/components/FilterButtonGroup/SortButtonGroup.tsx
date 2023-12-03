import React, {useState} from 'react';

import styles from './SortButtonGroup.module.scss';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../redux/actions/actions';



export const SortButtonGroup: React.FC = () => {

const [selectedButton, setSelectedButton] = useState<number>();
const uiState = useTypeSelector(state => state.ui);
const dispatch = useDispatch();
  const buttons = [
    { id: 1, name: 'Самый дешевый', state: uiState.sortButtonCheap },
    { id: 2, name: 'Самый быстрый',state: uiState.sortButtonFastest },
    { id: 3, name: 'Оптимальный',state: uiState.sortButtonOptimal },
  ];
const buttonClick = (index: number, buttonID: number) => {
  if(buttonID === 1){
    dispatch({ type: ActionTypes.SET_SORT_BUTTON_CHEAP })
  }
  if(buttonID === 2){
    dispatch({ type: ActionTypes.SET_SORT_BUTTON_FASTEST })
  }
  if(buttonID === 3){
    dispatch({ type: ActionTypes.SET_SORT_BUTTON_OPTIMAL })
  }
  setSelectedButton(index);
}
  return (
    <div className={styles.containerButtons}>
      {buttons.map((button, index) => (
        <button 
        key={button.id}
        className={selectedButton === index ? styles.buttonPainted : styles.button}
        onClick={() => buttonClick(index, button.id)}
        >{button.name}
        </button>
      ))}
    </div>
  );
};
