import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../../utils/constants';
import Dashboard from '../../screen/Dashboard/dashboard';
import {lightTheme} from '../../utils/styles/themes';
import React from 'react';
import {Header} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {AppImages} from '../../assets';
import PropertyInfoScreen from '../../screen/PropertyInfoScreen';

const Stack = createNativeStackNavigator();

const AuthenticatedStack = () => {
  const nav = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName={routes.dashboard}
      screenOptions={{
        headerStyle: {
          backgroundColor: lightTheme.colors.header,
        },
        headerBackVisible: false,
        headerTitle: () => (
          <Header title="Green Sky Apartment" goBack={nav.goBack} />
        ),
        headerRight: () => <AppImages.More />,
      }}>
      <Stack.Screen name={routes.dashboard} component={Dashboard} />
      <Stack.Screen
        name={routes.propertyInfoScreen}
        component={PropertyInfoScreen}
      />
    </Stack.Navigator>
  );
};
export default AuthenticatedStack;
