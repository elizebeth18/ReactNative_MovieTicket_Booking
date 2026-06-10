import { Pressable, View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ListMovies = ({ title, id }) => {

    const navigation = useNavigation();

    const onImagePressHandler = () => {

        navigation.navigate('MovieDetails', {
            'id': id,
            'title': title
        })
    }

    return (
        <View style={styles.movieContainer}>
            <Pressable
                onPress={onImagePressHandler}
                android_ripple={{ color: "#cccc", foreground: true }} 
                style={({ pressed }) => [pressed && styles.pressed]}
            >
                <View style={styles.innerContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/img/1.jpg')} />
                    <Text style={styles.text}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    movieContainer: {
        margin: 10
    },

    innerContainer: {
        borderRadius: 12,
    },
    image: {
        width: 250,
        height: 250, 
        borderRadius: 12,
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        padding: 8,
    },
    pressed: {
        opacity: 0.7,
    }
});

export default ListMovies;