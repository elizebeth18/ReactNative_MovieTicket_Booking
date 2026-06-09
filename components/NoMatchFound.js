import { View, Text, StyleSheet } from 'react-native'

const NoMatchFound = () => {
    return (
        <View>
            <Text style={styles.noMatchFoundText}>No Match Found</Text>
        </View>
    )
}

export default NoMatchFound;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 45,
        backgroundColor: '#540505cc',

        
    },
    noMatchFoundText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white'
    }
})