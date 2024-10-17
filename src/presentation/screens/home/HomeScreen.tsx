import { Pressable, Text, View } from "react-native"
import { globalStyles } from '../../theme/theme';

export const HomeScreen = ( ) => {

  
  
  return (
    <View style={ globalStyles.container }>
      <Pressable style={ globalStyles.primaryButton }>
        <Text style={ globalStyles.buttonText }>Products</Text>
      </Pressable>
    </View>
  )
}