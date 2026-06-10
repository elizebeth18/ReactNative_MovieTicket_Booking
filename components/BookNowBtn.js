import { View, Text, Pressable, StyleSheet } from 'react-native';

const BookNowBtn = () => {
    const bookNowHandler = () => {

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