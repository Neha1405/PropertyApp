# Property Data Collection App

This application allows users to add details of properties, such as address, location, units, building, site info, levels, and rooms. The app is designed to work offline first, storing data locally and uploading it when a network connection is available.

## Features

- Offline-first functionality with local data storage
- Automatic data upload when the network is available
- Secure local storage using encryption
- Dynamic UI with expand/collapse components for different property details
- State management using Redux and TypeScript

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Neha1405/PropertyApp.git
   cd PropertyApp
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Link native dependencies:

   ```sh
   npx react-native link
   ```

## Usage

1. Start the Metro bundler:

   ```sh
   npx react-native start
   ```

2. Run the application:

   For Android:

   ```sh
   npx react-native run-android
   ```

   For iOS:

   ```sh
   npx react-native run-ios
   ```

## Project Structure

- `src/components`: Contains all the reusable UI components, such as `AnimatedExpandCollapseComponent` and `TextInputComponent`.
- `src/redux`: Contains Redux setup, including slices for network status and data queue.
- `src/utils`: Contains utility functions for storage and encryption.
- `App.tsx`: The main entry point of the application.

## Redux State Management

The app uses Redux for state management with the following slices:

- `networkSlice`: Manages network status (`isConnected`).
- `dataQueueSlice`: Manages the queue of data to be uploaded when the network is available.

### Middleware

A custom middleware handles network changes and processes the data queue when the network becomes available.

### Actions and Reducers

- `setNetworkStatus`: Updates the network status.
- `addToQueue`: Adds new data to the queue.
- `removeFromQueue`: Removes data from the queue.
- `loadQueue`: Loads the initial queue from local storage.
- `uploadData`: Uploads data to the backend.

## Local Storage

Data is stored locally using encrypted storage to ensure security. The `storeData` and `getData` functions handle saving and retrieving data from local storage.

## TypeScript

The project is written in TypeScript for type safety and improved code quality.

## Expand/Collapse Components

The app includes dynamic UI components that expand and collapse to show or hide different sections of property details.
