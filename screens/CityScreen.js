import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native"; // ✅ Correct
import Ionicons from "react-native-vector-icons/Ionicons";

const batiments = [
  {
    id: "1",
    name: "Temple Saint-Etienne",
    plus: "En savoir plus >",
    gps: "47.74728803080278,7.338715665669766",
    creation: "1858-1868",
    createur: "Jean-Baptiste Schacre",
    taille: "91 metres",
    description:
      "Le temple a été classé au titre des monuments historiques en 1995, témoignant de son importance patrimoniale. Outre sa fonction cultuelle, il accueille régulièrement des concerts et des expositions, contribuant ainsi à la vie culturelle de Mulhouse.",
    image: require("../assets/temple.jpg"),
  },
  {
    id: "2",
    name: "Zoo de Mulhouse",
    plus: "En savoir plus >",
    gps: "47.7509,7.3208",
    creation: "1868",
    createur: "Charles Thierry-Mieg",
    taille: "25 hectares",
    description:
      "Fondé en 1868, le Zoo de Mulhouse est l'un des plus anciens de France. Il abrite plus de 1200 animaux de 170 espèces différentes et joue un rôle clé dans la conservation des espèces menacées. Le parc offre également un superbe jardin botanique avec plus de 3000 variétés de plantes.",
    image: require("../assets/zoo.jpg"),
  },

  {
    id: "3",
    name: "Hôtel de Ville de Mulhouse",
    plus: "En savoir plus >",
    gps: "47.7506,7.3386",
    creation: "1552",
    createur: "Architecte inconnu",
    taille: "Non spécifiée",
    description:
      "Construit en 1552 dans un style Renaissance rhénane, l'Hôtel de Ville de Mulhouse est célèbre pour sa façade richement ornée et son remarquable escalier extérieur. Il abrite aujourd’hui le musée historique de Mulhouse et témoigne du passé indépendant de la ville.",
    image: require("../assets/hdv_mulhouse.jpg"),
  },
];

const BatCard = ({ batiment, navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate("CityBat", { batiment })}
  >
    <View style={styles.card}>
      <Image source={batiment.image} style={styles.image} />
      <View style={styles.badge}>
        <Text style={styles.cityName}>{batiment.name}</Text>
        <Text style={styles.region}>{batiment.plus}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default function CityScreen() {
  const route = useRoute();
  const { city } = route.params;
  const navigation = useNavigation(); // ✅ Récupérer la ville sélectionnée

  return (
    <View style={styles.container}>
      {/* IMAGE PLEIN ÉCRAN EN HAUT */}
      <View style={styles.bannerContainer}>
        <Image source={require("../assets/tram.jpg")} style={styles.banner} />
        <View style={styles.textOverlay}>
          <Text style={styles.logo}>
            VISIT<Text style={styles.highlight}>{city.name}</Text>
          </Text>
        </View>
      </View>
      <Text style={styles.titrepage}>Bâtiments Cultes</Text>
      <FlatList
        data={batiments}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <BatCard batiment={item} navigation={navigation} />
        )}
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
    backgroundColor: "#fff",
  },
  bannerContainer: {
    width: "100%",
    height: "25%", // ✅ Ajustable selon besoin
  },
  banner: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  textOverlay: {
    position: "absolute",
    top: 48,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
  },
  highlight: {
    color: "#FDB927", // Jaune pour "MY"
  },
  titrepage: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    margin: 20,
    padding: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  searchIcon: {
    marginLeft: 10,
  },
  card: {
    width: 300,
    height: 450,
    borderRadius: 10,
    overflow: "hidden",
    marginLeft: 20, // Appliquer le margin seulement à gauche
  },
  image: {
    width: "100%",
    height: "100%",
  },
  badge: {
    position: "absolute",
    bottom: 10,
    left: "50%",
    transform: [{ translateX: -75 }], // Centrage horizontal
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: 25, // ✅ Forme arrondie
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignItems: "center",
    width: 150, // Ajustable selon besoin
  },
  cityName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  region: {
    color: "#ccc",
    fontSize: 12,
    textAlign: "center",
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
