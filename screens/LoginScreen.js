import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.infoText}>Connexion</Text>

            <TextInput
                style={styles.input}
                placeholder="Adresse e-mail"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.loginButtonText}>Se connecter</Text>
            </TouchableOpacity>

            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('HomeScreen')}>
                    <Ionicons name="home" size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('FavoriteScreen')}>
                    <Ionicons name="heart-outline" size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('LoginScreen')}>
                    <Ionicons name="person-outline" size={24} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',

    },
    infoText: {
        fontSize: 36,
        marginBottom: 80,

        fontWeight: 'bold'
    },
    input: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 25,
        fontSize: 16
    },
    loginButton: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 20,
        marginTop: 40,

    },
    loginButtonText: {
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 16
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
        paddingVertical: 15,
        position: 'absolute',
        bottom: 0,
        width: '100%',
      },
      navButton: {
        padding: 10,
      },
});

export default LoginScreen;
