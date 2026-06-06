import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moviesListThunk } from '../store/moviesSlice';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const MoviesList = () => {
    const [moviesList, setMoviesList] = useState([]);
    const selectMoviesList = useSelector((state) => state.moviesR.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesListThunk())
    }, []);

    useEffect(()=>{
        setMoviesList(selectMoviesList);
        console.log(selectMoviesList.length)
    },[selectMoviesList]);

    return (
        <View style={styles.rootContainer}>
            {selectMoviesList.map((movie,index) => {
                return (<Text key={index}>{movie.title}</Text>)
            })}
        </View>
    )
}

export default MoviesList;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        //padding:50,
        // margin: 50,
        backgroundColor: '#540505cc'
    }
})