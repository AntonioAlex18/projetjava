import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importer le hook useNavigation

const cities = [
  {
    id: '1',
    name: 'Mulhouse',
    region: 'Alsace, Haut-Rhin',
    image: require('../assets/mlh1.jpg'),
  },
  {
    id: '2',
    name: 'Strasbourg',
    region: 'Alsace, Bas-Rhin',
    image: require('../assets/mlh1.jpg'),
  },
];

const CityCard = ({ city }) => {
  const navigation = useNavigation(); // Utilisation du hook useNavigation ici

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CityScreen', { city })}
      style={styles.card}
    >
      <Image source={city.image} style={styles.image} />
      <View style={styles.badge}>
        <Text style={styles.cityName}>{city.name}</Text>
        <Text style={styles.region}>{city.region}</Text>
      </View>
    </TouchableOpacity>
  );
};

const BottomNav = () => {
  const navigation = useNavigation(); // Utilisation du hook useNavigation dans BottomNav

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Ionicons name="home" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('FavoriteScreen')}
      >
        <Ionicons name="heart-outline" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('NotConnectedScreen')}
      >
        <Ionicons name="person-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image source={require('../assets/mlh2.jpg')} style={styles.banner} />
        <View style={styles.textOverlay}>
          <Text style={styles.logo}>
            VISIT <Text style={styles.highlight}>MY</Text> CITIES
          </Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Découvrir"
          placeholderTextColor="#666"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Ionicons name="search" size={20} color="#000" style={styles.searchIcon} />
      </View>

      <FlatList
        data={filteredCities}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <CityCard city={item} />}
      />

      {/* Intégrer la barre de navigation en bas */}
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerContainer: {
    width: '100%',
    height: '25%', // ✅ Ajustable selon besoin
  },
  banner: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  textOverlay: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logo: {
    fontSize: 36, // Augmenté pour correspondre à l'image 2
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 4, // Espacement augmenté pour un effet plus étiré
  },
  highlight: {
    color: '#FDB927', // Jaune pour "MY"
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    margin: 20,
    padding: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  searchIcon: {
    marginLeft: 10,
  },
  card: {
    width: 300,
    height: 450,
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 20, // Appliquer le margin seulement à gauche
  },
  image: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    bottom: 10,
    left: '50%',
    transform: [{ translateX: -90 }], // Ajusté pour élargir tout en restant centré
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 25, // ✅ Forme arrondie
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: 180, // Augmenté pour élargir
  },
  cityName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  region: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
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
