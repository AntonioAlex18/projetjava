import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class NotConnectedScreen extends React.Component {
    render() {
        const { navigation } = this.props; // Assurez-vous que cette ligne est correcte
        return (
            <View style={styles.container}>
                <Text style={styles.infoText}>Vous n'êtes pas connecté</Text>

                {/* Boutons de connexion */}
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.loginButtonText}>Se connecter</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.registerButtonText}>S'inscrire</Text>
                </TouchableOpacity>

                {/* BARRE DE NAVIGATION EN BAS */}
                <View style={styles.bottomNav}>
                    <TouchableOpacity
                        style={styles.navButton}
                        onPress={() => navigation.navigate('HomeScreen')}>
                        <Ionicons name="home" size={24} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.navButton}
                        onPress={() => navigation.navigate('FavoriteScreen')}>
                        <Ionicons name="heart-outline" size={24} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.navButton}
                        onPress={() => navigation.navigate('NotConnectedScreen')}>
                        <Ionicons name="person-outline" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    infoText: {
        fontSize: 18,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    loginButton: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 20,
        marginVertical: 10,
    },
    loginButtonText: {
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 16,
    },
    registerButton: {
        backgroundColor: 'yellow',
        paddingVertical: 10,
        paddingHorizontal: 55,
        borderRadius: 20,
        marginVertical: 10,
    },
    registerButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
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

export default NotConnectedScreen;
