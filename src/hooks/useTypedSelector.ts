import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { Rootstate } from '../state';

export const useTypedSelector: TypedUseSelectorHook<Rootstate> = useSelector;