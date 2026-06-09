import { Pressable, View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

const ListMovies = ({ title, id }) => {

    const navigation = useNavigation();

    const onImagePressHandler = () => {
        console.log('id', id);
        navigation.navigate('MovieDetails', {
            'id': id,
            'title': title
        })
    }

    /* useLayoutEffect(() => {
        navigation.setOptions({
            title: title
        })
    }, [navigation]); */

    return (
        <View style={styles.movieContainer}>
            <Pressable onPress={onImagePressHandler}>
                <Image
                    style={styles.image}
                    source={require('../assets/img/1.jpg')} />
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    movieContainer: {
        margin: 10
    },
    image: {
        width: 250,
        height: 250
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        padding: 8,
    }
});

export default ListMovies;