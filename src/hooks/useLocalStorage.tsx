import { Dispatch, SetStateAction, useState } from 'react';

type SetValue<T> = T | ((prevValue: T) => T);

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: SetValue<T>) => {
    try {
      const valueToStore = value instanceof Function ? (value as Function)(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as [T, (value: SetValue<T>) => void];
}
