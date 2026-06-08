import { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { moviesListThunk } from '../store/moviesSlice';
import { View, FlatList, Image,Text, StyleSheet } from 'react-native';

const MoviesList = () => {
    const [moviesList, setMoviesList] = useState([]);
    const navigation = useNavigation();

    const [searchQuery, setSearchQuery] = useState('');

    const selectMoviesList = useSelector((state) => state.moviesR.movies);
    const dispatch = useDispatch();

    

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerSearchBarOptions: {
                placeholder: 'Search Movies..',
                onChangeText: (event) => { setSearchQuery(event.nativeEvent.text) },
                onCancelButtonPress: () => {
                    setSearchQuery('');
                    console.log('User cancelled the search');
                },
                onClearButtonPress: () => {setSearchQuery('')
                    console.log('clear btn');},
                //cancelSearch={},
            }
        })
    },[navigation]);


    useEffect(() => {
        dispatch(moviesListThunk())
    }, []);

    useEffect(() => {
        setMoviesList(selectMoviesList);

        
    }, [selectMoviesList]);

    useEffect(()=> {


        const filteredMoviesList = selectMoviesList.filter((movie) => {
        return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    //setMoviesList(filteredMoviesList);
        if(filteredMoviesList.length > 0) {
        setMoviesList(filteredMoviesList)
    }
    },[searchQuery]);

    return (
        <View style={styles.rootContainer}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={moviesList}
                contentInsetAdjustmentBehavior='automatic'
                renderItem={(itemData) => {
                    return(
                        <View style={styles.movieContainer}>
                            <Image 
                                style={styles.image}
                                source={require('../assets/img/1.jpg')}/>
                            <Text style={styles.text}>{itemData.item.title}</Text>
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
    movieContainer: {
        margin: 10
    },
    image: {
        width: '120%',
        height: 250
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        padding: 8,
    }
})