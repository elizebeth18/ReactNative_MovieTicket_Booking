import { View, FlatList,Text, StyleSheet } from 'react-native';

const MoviesList = () => {
    return (
        <View style={styles.rootContainer}>
            <Text style={{ 'color': 'white' }}>This component displays list of movies</Text>
        </View>
    )
}

export default MoviesList;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        //padding:50,
        // margin: 50,
        backgroundColor: '#540505cc'
    }
})