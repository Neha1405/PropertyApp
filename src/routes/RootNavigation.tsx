import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import {navigationRef} from '../utils/navigation';
import {View} from 'react-native';
import AuthenticatedStack from './AuthenticatedStack';
import {routes} from '../utils/constants';

type RootNavigationProps = {};

const RootStack = createNativeStackNavigator();

const RootNavigation: FC<RootNavigationProps> = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <View style={{flex: 1}}>
        <RootStack.Navigator>
          <RootStack.Screen
            options={
              {
                //   headerTitleStyle: themeStyles.fontMedium,
                //   headerShown: false,
              }
            }
            component={AuthenticatedStack}
            name={routes.authenticated}
          />
        </RootStack.Navigator>
      </View>
    </NavigationContainer>
  );
};
export default RootNavigation;
