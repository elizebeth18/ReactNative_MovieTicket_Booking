import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookNowBtn = ({ movieId }) => {

    const navigation = useNavigation();

    const bookNowHandler = () => {
        navigation.navigate('UserDetails',{ movieId: movieId })
    }
    return(
        <View>
            <Pressable onPress={bookNowHandler}>
                <View>
                    <Text>Book Now</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default BookNowBtn;

const styles = StyleSheet.create({

});