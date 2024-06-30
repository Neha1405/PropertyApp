// dataQueue.ts
import {storeData, getData} from './storage/storage';

const QUEUE_KEY = 'dataQueue';

interface DataItem {
  id: string;
  data: any;
}

export async function addToQueue(data: DataItem) {
  const queue = (await getData(QUEUE_KEY)) || [];
  queue.push(data);
  await storeData(QUEUE_KEY, queue);
}

export async function processQueue(
  uploadFunction: (data: any) => Promise<void>,
) {
  const queue = (await getData(QUEUE_KEY)) || [];

  for (const item of queue) {
    try {
      await uploadFunction(item.data);
      await removeFromQueue(item.id);
    } catch (error) {
      console.error('Error uploading data', error);
      break; // Stop processing if upload fails
    }
  }
}

async function removeFromQueue(id: string) {
  let queue = (await getData(QUEUE_KEY)) || [];
  queue = queue.filter((item: DataItem) => item.id !== id);
  await storeData(QUEUE_KEY, queue);
}
