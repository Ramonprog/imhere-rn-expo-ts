import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles'

export function Home() {

    function handleParticipantAdd() {
        console.log('Participante adicionado')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventeDate}>Sexta, 4 de Novembro de 2020</Text>

            <TextInput
                style={styles.input}
                placeholder='Nome do participante'
                placeholderTextColor='#6b6b6b'
            />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}
