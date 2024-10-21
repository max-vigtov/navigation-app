import { DrawerActions, useNavigation } from "@react-navigation/native"
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native"
import { BugerMenu } from "../../components/shared/BugerMenu";

export const Tab1Screen = () => {
  return (
    <View>
      <BugerMenu/>
        <Text>Tab1Screen</Text>
    </View>
  )
}