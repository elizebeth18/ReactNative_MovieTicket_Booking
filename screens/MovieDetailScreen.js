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
                    <Text>{chosenMovie?.prices?.normal}</Text>
                    
                    <BookNowBtn movieId={movieId} />
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