import { NavigationContainer } from "@react-navigation/native"
import { Text } from "react-native"
import 'react-native-gesture-handler';
import { StackNavigator } from "./presentation/routes/StackNavigator";

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}