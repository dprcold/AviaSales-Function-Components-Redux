import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/combineReducers';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
