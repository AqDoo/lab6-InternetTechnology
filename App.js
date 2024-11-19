import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native';

export default function App() {
    const [text, setText] = useState(''); // Хук для работы с текстом

    const handlePress = () => {
        alert('Батырма басылды!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>React Native Қосымшасы</Text>

            {/* Картинка */}
            <Image 
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
                style={styles.image} 
            />

            {/* Текстовое поле */}
            <TextInput 
                style={styles.input} 
                placeholder="Мәтін енгізіңіз"
                onChangeText={setText} // Обновляем текст в состоянии
                value={text} 
            />

            {/* Отображение введённого текста */}
            <Text>Сіз енгіздіңіз: {text}</Text>

            {/* Кнопка */}
            <Button title="Басу" onPress={handlePress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        width: '80%',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
});