import Icon from "react-native-vector-icons/Ionicons";

interface Props {
    name: string;
    size?: number;
    color?: string;
}

export const IonIcon = ({ name, size = 30, color = 'grey' }:Props) => {
  return (
    <Icon 
        name={ name }
        size={ size }
        color={ color }
    />
  )
}