import { useAppSelector } from '../../hooks';

export default function useControlSelector() {
  return useAppSelector((state) => state.control);
}
