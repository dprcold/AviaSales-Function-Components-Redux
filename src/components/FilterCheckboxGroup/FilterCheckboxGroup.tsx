import React from 'react';
import { useDispatch } from 'react-redux';

import customCheckBox from '../assets/Checkbox.png';
import checkedCustomCheckBox from '../assets/CheckboxChecked.png';
import { ActionTypes } from '../../redux/actions';
import { useTypeSelector } from '../../hooks/useTypeSelector';

import style from './FilterCheckboxGroup.module.scss';

enum CheckboxIds {
  All = 1,
  NoTransfers = 2,
  OneTransfer = 3,
  TwoTransfers = 4,
  ThreeTransfers = 5,
}

export const FilterCheckboxGroup: React.FC = () => {
  const uiState = useTypeSelector((state) => state.ui);
  const dispatch = useDispatch();
  const checkboxes = [
    { id: CheckboxIds.All, title: 'Все', state: uiState.checkboxAll },
    { id: CheckboxIds.NoTransfers, title: 'Без пересадок', state: uiState.checkboxNoTransfers },
    { id: CheckboxIds.OneTransfer, title: '1 пересадка', state: uiState.checkboxOneTransfers },
    { id: CheckboxIds.TwoTransfers, title: '2 пересадка', state: uiState.checkboxTwoTransfers },
    { id: CheckboxIds.ThreeTransfers, title: '3 пересадка', state: uiState.checkboxThreeTransfers },
  ];

  const changeCheckbox = (checkboxId: number) => {
    if (checkboxId === CheckboxIds.All && !uiState.checkboxAll) {
      dispatch({ type: ActionTypes.SET_ALL_CHECKBOX_TRUE });
    } else {
      dispatch({ type: ActionTypes.SET_ALL_CHECKBOX_FALSE });
    }

    if (checkboxId === CheckboxIds.NoTransfers) {
      dispatch({ type: ActionTypes.SET_CHECKBBOX_NO_TRANSFERS });
    }

    if (checkboxId === CheckboxIds.OneTransfer) {
      dispatch({ type: ActionTypes.SET_CHECKBOX_ONE_TRANSFER });
    }

    if (checkboxId === CheckboxIds.TwoTransfers) {
      dispatch({ type: ActionTypes.SET_CHECKBOX_TWO_TRANSFERS });
    }
    
    if (checkboxId === CheckboxIds.ThreeTransfers) {
      dispatch({ type: ActionTypes.SET_CHECKBOX_THREE_TRANSFERS });
    } 
  };
  return (
    <div className={style.container}>
      <div className={style.title}>количество пересадок</div>
      <div>
        {checkboxes.map((checkbox) => (
          <div key={checkbox.id} className={style.checkboxElem} onClick={() => changeCheckbox(checkbox.id)}>
            <img src={checkbox.state ? checkedCustomCheckBox : customCheckBox} />
            <span className={style.checkboxTittle}>{checkbox.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
