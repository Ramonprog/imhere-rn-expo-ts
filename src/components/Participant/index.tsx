import { Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles'

interface IProps {
    name: string;
    onRemove: (name: string) => void;
}
export function Participant({ name, onRemove }: IProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.name} >{name}</Text>

            <TouchableOpacity onPress={() => onRemove(name)} style={styles.button} >
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}