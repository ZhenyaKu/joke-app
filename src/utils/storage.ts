import AsyncStorage from '@react-native-async-storage/async-storage';

const setItem = async (key: string, value: string): Promise<boolean> => {
  try {
    if (value) {
      await AsyncStorage.setItem(key, value);
    }
    return true;
  } catch {
    return false;
  }
};

const getItem = async (key: string): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    return null;
  }
};

export const storage = {
  setItem,
  getItem,
};
