import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../../utils/contants';
import Dashboard from '../../screen/Dashboard/dashboard';

const Stack = createNativeStackNavigator();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator initialRouteName={routes.dashboard}>
      <Stack.Screen
        name={routes.dashboard}
        component={Dashboard}
        options={
          {
            //   headerTitleStyle: themeStyles.fontMedium,
            //   headerShown: false,
          }
        }
      />
    </Stack.Navigator>
  );
};
export default AuthenticatedStack;
