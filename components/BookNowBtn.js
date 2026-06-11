import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookNowBtn = ({ movieId }) => {

    const navigation = useNavigation();

    const bookNowHandler = () => {
        navigation.navigate('UserDetails', { movieId: movieId })
    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={bookNowHandler}>
                <Text style={styles.butonText}>Book Now</Text>
            </Pressable>
        </View>
    )
}

export default BookNowBtn;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 2,
        overflow: 'hidden',
        margin: 20
    },
    buttonInnerContainer: {
        backgroundColor: '#540505',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    butonText: {
        textAlign: 'center',
        color: 'white'
    },
    pressed: {
        opacity: 0.75
    }
});