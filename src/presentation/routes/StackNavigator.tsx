import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductScreen } from '../screens/product/ProductScreen';
import { SettingScreen } from '../settings/SettingsScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ 
        headerStyle: {
          elevation: 20,
          shadowColor: 'transparent'
        }
     }}>
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="Products" component={ ProductScreen } />
      <Stack.Screen name="Settings" component={ SettingScreen } />
    </Stack.Navigator>
  );
}