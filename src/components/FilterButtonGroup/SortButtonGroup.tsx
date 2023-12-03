import React from 'react';

import styles from './SortButtonGroup.module.scss';


export const SortButtonGroup: React.FC = () => {


  const buttons = [
    { id: 1, name: 'Самый дешевый' },
    { id: 2, name: 'Самый быстрый' },
    { id: 3, name: 'Оптимальный' },
  ]

  

  return (
    <div className={styles.containerButtons}>
      {buttons.map((button) => (
        <button 
        key={button.id}
        className={styles.button}>{button.name}
        </button>
      ))}
    </div>
  );
};
