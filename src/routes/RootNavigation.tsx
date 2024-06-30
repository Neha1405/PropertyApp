/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import {navigationRef} from '../utils/navigation';
import {View} from 'react-native';
import AuthenticatedStack from './AuthenticatedStack';
import {routes} from '../utils/constants';

const RootStack = createNativeStackNavigator();

const RootNavigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <View style={{flex: 1}}>
        <RootStack.Navigator>
          <RootStack.Screen
            options={{
              headerShown: false,
              // headerBackTitle: 'Green Sky Apartment',
            }}
            component={AuthenticatedStack}
            name={routes.authenticated}
          />
        </RootStack.Navigator>
      </View>
    </NavigationContainer>
  );
};
export default RootNavigation;
