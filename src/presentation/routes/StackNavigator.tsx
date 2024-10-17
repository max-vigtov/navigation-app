import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductScreen } from '../screens/product/ProductScreen';
import { SettingScreen } from '../settings/SettingsScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="Notifications" component={ ProductScreen } />
      <Stack.Screen name="Profile" component={ SettingScreen } />
    </Stack.Navigator>
  );
}