import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { styles } from './styles'
import { Participant } from '../../components/Participant';

export function Home() {
    const participants = ['Raul', 'Rafael', 'Ricardo']
    function handleParticipantAdd() {
        const participantAlreadyExists = participants.includes('Raul')
        if (participantAlreadyExists) {
            return Alert.alert('Participante Existe', "Já existe um participante na lista com esse nome")
        }

    }

    function onRemove(name: string) {
        Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => console.log(`Você removeu ${name}`)
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])

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

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant key={item} onRemove={() => onRemove(item)} name={item} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.</Text>
                )}
            />


        </View>
    );
}
