import { useState, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Text, View, Image, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import BookNowBtn from "../components/BookNowBtn";


const MovieDetailScreen = ({ route }) => {

    const movieId = route.params.id;
    const [selectedSeat, setSelectedSeat] = useState(null)

    const selectMoviesList = useSelector(state => state.moviesR.movies);

    const chosenMovie = selectMoviesList.find((movie) => movie.id === route.params.id);



    return (
        <View style={styles.rootContainer}>
            {!chosenMovie ? (
                <Text style={styles.loadingText}>Loading...</Text>
            ) :
                <>
                    <View style={styles.card}>
                        <Image
                            style={styles.image}
                            source={require('../assets/img/1.jpg')}
                        />
                        <Text style={styles.title}>{chosenMovie.title}</Text>
                        <Text style={styles.director}>Directed By {chosenMovie.director}</Text>
                        <Text style={styles.plot}>{chosenMovie.plot}</Text>

                        <BookNowBtn movieId={movieId} />
                    </View>
                </>}
        </View>
    );

}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        padding: 16,
    },

    card: {
        backgroundColor: '#2b2b2b',
        borderRadius: 12,
        padding: 16,
        elevation: 5,
    },

    image: {
        width: '100%',
        height: 220,
        borderRadius: 10,
        marginBottom: 16,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        marginBottom: 8,
    },

    director: {
        fontSize: 16,
        color: '#cccccc',
        marginBottom: 16,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 8,
    },

    plot: {
        fontSize: 15,
        lineHeight: 24,
        color: '#e0e0e0',
        marginBottom: 24,
    },

    loadingText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 50,
    },
});

export default MovieDetailScreen;