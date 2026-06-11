import { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { moviesListThunk } from '../store/moviesSlice';
import { View, FlatList, Image, Text, StyleSheet, Platform } from 'react-native';
import ListMovies from '../components/ListMovies';
import NoMatchFound from '../components/NoMatchFound';

const MoviesList = () => {

    const [moviesList, setMoviesList] = useState([]);
    const navigation = useNavigation();

    const [searchQuery, setSearchQuery] = useState('');

    const selectMoviesList = useSelector((state) => state.moviesR.movies);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                placeholder: 'Search Movies..',
                headerIconColor: 'white',
                tintColor: 'white',
                onChangeText: (event) => { 
                    setSearchQuery(event.nativeEvent.text);
                    console.log('MoviesList render');
                 },
                onCancelButtonPress: () => {
                    setSearchQuery('');
                    console.log('User cancelled the search');
                },
                onClearButtonPress: () => {
                    setSearchQuery('')
                    console.log('clear btn');
                },
            }
        })
    }, [navigation]);


    useEffect(() => {
        dispatch(moviesListThunk())
    }, [dispatch]);

    useEffect(() => {
        setMoviesList(selectMoviesList);

    }, [selectMoviesList]);



    const filteredMoviesList = selectMoviesList.filter((movie) => {
        return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const isSearching = searchQuery.trim().length > 0;

    return (
        <View style={styles.rootContainer}>

            {(filteredMoviesList.length === 0 && isSearching) ? <NoMatchFound /> :
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={filteredMoviesList}
                    contentInsetAdjustmentBehavior='automatic'
                    renderItem={(itemData) => {
                        return (
                            <ListMovies
                                id={itemData.item.id}
                                title={itemData.item.title} 
                                imageTitle={itemData.item.image} />
                        )
                    }} />
            }
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
        marginBottom: 45,
        overflow: Platform === 'android' ? 'hidden' : 'visible'
    },
})