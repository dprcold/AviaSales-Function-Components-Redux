import React from 'react';

import slyles from './FilterButtonGroup.module.scss';

export const FilterButtonGroup: React.FC = () => {
  return (
    <div className={slyles.container}>
      <button className={slyles.button}>Самый дешевый</button>
      <button className={slyles.button}>Самый быстрый</button>
      <button className={slyles.button}>Оптимальный</button>
    </div>
  );
};
