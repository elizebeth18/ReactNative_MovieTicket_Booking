import { Pressable, View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ListMovies = ({ title, id, imageTitle }) => {

    const navigation = useNavigation();

    const movieImages = {
        '1.jpg': require('../assets/img/1.jpg'),
        '2.jpg': require('../assets/img/2.jpg'),
        '3.jpg': require('../assets/img/3.jpg'),
        '4.jpg': require('../assets/img/4.jpg'),
        '5.jpg': require('../assets/img/5.jpg'),
        '6.jpg': require('../assets/img/6.jpg'),
        '7.jpg': require('../assets/img/7.jpg')
    };


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
                        source={(movieImages[imageTitle])} />
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