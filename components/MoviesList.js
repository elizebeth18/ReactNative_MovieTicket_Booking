import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moviesListThunk } from '../store/moviesSlice';
import { View, FlatList, Image,Text, StyleSheet } from 'react-native';

const MoviesList = () => {
    const [moviesList, setMoviesList] = useState([]);
    const selectMoviesList = useSelector((state) => state.moviesR.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesListThunk())
    }, []);

    useEffect(() => {
        setMoviesList(selectMoviesList);
        console.log(selectMoviesList.length)
    }, [selectMoviesList]);

    return (
        <View style={styles.rootContainer}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={selectMoviesList}
                renderItem={(itemData) => {
                    return(
                        <View>
                            <Image 
                                style={styles.image}
                                source={require('../assets/img/1.jpg')}/>
                            <Text>{itemData.item.title}</Text>
                        </View>
                    )
                }} />
            
        </View>
    )
}

export default MoviesList;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        //margin: 50,
        backgroundColor: '#540505cc'
    },
    image: {
        width: '100%',
        height: 200
    }
})