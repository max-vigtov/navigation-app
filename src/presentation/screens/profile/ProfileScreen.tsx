import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { PrimaryButton } from "../../components/shared/PrimaryButton"
import { DrawerActions, useNavigation } from "@react-navigation/native"

export const ProfileScreen = () => {

  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={{ 
      flex: 1,
      padding: 20,
      marginTop: top
     }}>
        <Text style={{ marginBottom: 20 }}>Profile Screen</Text>
        <PrimaryButton
          onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }
          label="Open Menu"
        />
    </View>
  )
}