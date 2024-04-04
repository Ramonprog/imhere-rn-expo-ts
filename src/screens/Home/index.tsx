import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { Participant } from '../../components/Participant';

export function Home() {

    function handleParticipantAdd() {
        console.log('Participante adicionado')
    }

    function onRemove(name: string) {
        console.log(`Você removeu ${name}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventeDate}>Sexta, 4 de Novembro de 2020</Text>
            <View style={styles.buttonArea}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor='#6b6b6b'
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <Participant onRemove={onRemove} name='Ramon' />
            <Participant onRemove={onRemove} name='Raul' />

        </View>
    );
}
