// storage.ts
import EncryptedStorage from 'react-native-encrypted-storage';

export async function storeData(key: string, value: any) {
  try {
    await EncryptedStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error storing data', error);
  }
}

export async function getData(key: string) {
  try {
    const data = await EncryptedStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error getting data', error);
  }
}

export async function removeData(key: string) {
  try {
    await EncryptedStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data', error);
  }
}
