import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { BugerMenu } from '../components/shared/BugerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return ( 
    <>
    <BugerMenu/>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ ProfileScreen } />
        <Tab.Screen name="About" component={ AboutScreen } />
      </Tab.Navigator>
    </>
  );
}