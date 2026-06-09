import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Text, Image, StyleSheet, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const MovieDetailScreen = ({ route }) => {

    const movieId = route.params.id;
    const navigation = useNavigation();
    const selectMoviesList = useSelector(state => state.moviesR.movies);

    const chosenMovie = selectMoviesList.find((movie) => movie.id === route.params.id);

    useLayoutEffect(()=> {
        navigation.setOptions({
            title: route.params.title
        })
    },[]);

    return (
        <View style={styles.rootContainer}>
            {!chosenMovie && <Text>Loading....</Text>}
            {chosenMovie && <>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../assets/img/1.jpg')}
                    />
                </View>
                <Text>{chosenMovie.title}</Text>
                <Text>{chosenMovie.director}</Text>
                <Text>{chosenMovie.plot}</Text>
                <Text>{chosenMovie.prices?.normal}</Text>
            </>}
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        margin: 10,
        padding: 5
    },
    image: {
        width: '100%',
        height: 120
    }
});

export default MovieDetailScreen;