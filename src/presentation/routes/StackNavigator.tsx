import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { SettingScreen } from '../settings/SettingsScreen';
import { ProductsScreen } from '../screens/product/ProductsScreen';
import { ProductScreen } from '../screens/product/ProductScreen';

export type RootStackParams = {
  Home: undefined,
  Products: undefined,
  Settings: undefined,
  Product: { id: number, name: string },
}

const Stack = createStackNavigator<RootStackParams>();


export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ 
        headerStyle: {
          elevation: 20,
          shadowColor: 'transparent'
        }
     }}>
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="Products" component={ ProductsScreen } />
      <Stack.Screen name="Settings" component={ SettingScreen } />
      <Stack.Screen name="Product" component={ ProductScreen } />

    </Stack.Navigator>
  );
}