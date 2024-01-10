import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useShallowEqualSelector<T>(selector: (state: RootState) => T): T {
  return useAppSelector(selector, shallowEqual);
}
