import React from 'react';
import { Spinner } from '@chakra-ui/react';

import styles from './loader.module.scss';
export const Loader: React.FC = () => {
  return (
    <div className={styles.loaderWrapper}>
      <Spinner speed="0.65s" emptyColor="gray.200" color="blue.300" size="lg" />
    </div>
  );
};
