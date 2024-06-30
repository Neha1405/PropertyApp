// NetworkStatusProvider.tsx
import React, {createContext, useState, useEffect, ReactNode} from 'react';
import NetInfo from '@react-native-community/netinfo';

interface NetworkStatusContextType {
  isConnected: boolean;
}

export const NetworkStatusContext = createContext<NetworkStatusContextType>({
  isConnected: true,
});

export const NetworkStatusProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NetworkStatusContext.Provider value={{isConnected}}>
      {children}
    </NetworkStatusContext.Provider>
  );
};
