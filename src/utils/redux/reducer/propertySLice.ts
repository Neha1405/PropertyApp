import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Property} from '../types';

interface PropertyState {
  properties: Property[];
  offlineQueue: Property[];
}

const initialState: PropertyState = {
  properties: [],
  offlineQueue: [],
};

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    addProperty: (state, action: PayloadAction<Property>) => {
      state.properties.push(action.payload);
      state.offlineQueue.push(action.payload);
    },
    removeFromQueue: (state, action: PayloadAction<string>) => {
      state.offlineQueue = state.offlineQueue.filter(
        property => property.id !== action.payload,
      );
    },
  },
});

export const {addProperty, removeFromQueue} = propertySlice.actions;
export default propertySlice.reducer;
