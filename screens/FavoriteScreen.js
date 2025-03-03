import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const favoriteCities = [
  {
    id: '1',
    name: 'Paris',
    region: 'Île-de-France',
    image: require('../assets/mlh1.jpg'),
  },
  {
    id: '2',
    name: 'Lyon',
    region: 'Auvergne-Rhône-Alpes',
    image: require('../assets/mlh1.jpg'),
  },
  {
    id: '3',
    name: 'Marseille',
    region: 'Provence-Alpes-Côte d\'Azur',
    image: require('../assets/mlh1.jpg'),
  },
];

const CityCard = ({ city }) => (
  <View style={styles.card}>
    <Image source={city.image} style={styles.image} />
    <View style={styles.badge}>
      <Text style={styles.cityName}>{city.name}</Text>
      <Text style={styles.region}>{city.region}</Text>
    </View>
  </View>
);

export default function FavoriteScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* IMAGE PLEIN ÉCRAN EN HAUT */}
      <View style={styles.bannerContainer}>
        <Image source={require('../assets/mlh2.jpg')} style={styles.banner} />
        <View style={styles.textOverlay}>
          <Text style={styles.logo}>
            VISIT <Text style={styles.highlight}>MY</Text> CITIES
          </Text>
        </View>
      </View>

      {/* TITRE "Favoris" */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Favoris</Text>
      </View>

      {/* LISTE DES VILLES FAVORITES */}
      <FlatList
        data={favoriteCities}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <CityCard city={item} />}
      />

      {/* BARRE DE NAVIGATION EN BAS */}
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
  titleContainer: {
    alignItems: 'center',
    marginVertical: 20, // Espacement vertical
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold', // Gras
    color: '#000',
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
