import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native'
import { Controller, useForm } from 'react-hook-form';
import { Dropdown } from 'react-native-element-dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { submitTicket } from '../store/bookTicketSlice';


const UserDetailScreen = ({ route, navigation }) => {

    const dispatch = useDispatch();
    const moviesList = useSelector(state => state.moviesR.movies);
    const selectedMovie = moviesList.find(movie => movie.id === route.params.movieId);

    let seatTypeData = selectedMovie && Object.entries(selectedMovie?.prices).map(
        ([key, value]) => ({
            label: `${key} - ₹${value}`,
            value: value,
        })
    );


    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            movieId: route.params?.movieId,
            movieName: selectedMovie?.title,
            price: ''
        }
    });

    const onSubmit = async (data) => {
        try {
            const result = await dispatch(
                submitTicket(data)
            ).unwrap();

            Alert.alert(
                'Success',
                'Ticket is successfully booked',
                [
                    {
                        text: 'Okay',
                        onPress: () => navigation.popToTop(),
                    },
                ]
            );

        } catch (error) {
            Alert.alert(
                'Error',
                error.message || 'Failed to book ticket'
            );
        }
    }


    return (
        <View style={styles.rootContainer}>
            <View style={styles.card}>
                <Text style={styles.heading}>
                    Book Your Ticket
                </Text>
                <Controller
                    control={control}
                    name='name'
                    rules={{
                        required: 'Name is required'
                    }}
                    render={({ field: { onChange, onBlur, value } }) => {
                        return (
                            <TextInput
                                placeholder='Name'
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                style={styles.input}
                            />
                        )
                    }}
                />

                {errors.name && (
                    <Text style={styles.errorText}>{errors.name.message}</Text>
                )}

                <Controller
                    control={control}
                    name="email"
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Please enter a valid email address',
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Email"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={styles.input}
                        />
                    )}
                />

                {errors.email && (
                    <Text style={styles.errorText}>{errors.email.message}</Text>
                )}

                <Controller
                    control={control}
                    name="movieId"
                    render={({ field: { value } }) => null}
                />

                <Controller
                    control={control}
                    name="movieName"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            placeholder="MovieName"
                            value={selectedMovie?.title || ''}
                            editable={false}
                            style={styles.readOnlyInput}

                        />
                    )}
                />

                <Controller
                    control={control}
                    name="price"
                    rules={{
                        required: 'Please select a seat type'
                    }}
                    render={({ field: { onChange, value } }) => (
                        <Dropdown
                            data={seatTypeData}
                            placeholder='Select Seat Type'
                            labelField='label'
                            valueField='value'
                            value={value} 
                            style={styles.dropdown}
                            placeholderStyle={styles.dropdownPlaceholder}
                            selectedTextStyle={styles.dropdownSelectedText}
                            onChange={(item) => onChange(item.value)}
                        />
                    )}
                />

                {errors.price && (
                    <Text style={styles.errorText}>{errors.price.message}</Text>
                )}



                <Pressable
                    onPress={handleSubmit(onSubmit)}
                    style={styles.submitButton}
                >
                    <Text style={styles.submitButtonText}>
                        Submit
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default UserDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        padding: 15,
    },

    card: {
        backgroundColor: '#1e1e1e',
        borderRadius: 16,
        padding: 20,
        elevation: 6,
    },

    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        marginBottom: 25,
    },

    input: {
        borderWidth: 1.5,
        borderColor: '#ddb52f',
        color: '#ffffff',
        backgroundColor: '#2a2a2a',
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderRadius: 10,
        marginBottom: 12,
        fontSize: 16,
    },

    dropdown: {
        borderWidth: 1.5,
        borderColor: '#ddb52f',
        backgroundColor: '#2a2a2a',
        borderRadius: 10,
        paddingHorizontal: 12,
        height: 50,
        marginBottom: 12,
    },

    dropdownPlaceholder: {
        color: '#888',
    },

    dropdownSelectedText: {
        color: '#ffffff',
        fontSize: 16,
    },

    errorText: {
        color: '#ff6b6b',
        marginBottom: 10,
        marginLeft: 4,
        fontSize: 13,
    },

    submitButton: {
        backgroundColor: '#ddb52f',
        paddingVertical: 14,
        borderRadius: 10,
        marginTop: 15,
    },

    submitButtonText: {
        color: '#121212',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
    },

    readOnlyInput: {
        borderWidth: 1.5,
        borderColor: '#ddb52f',
        backgroundColor: '#333',
        color: '#999',
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderRadius: 10,
        marginBottom: 12,
        fontSize: 16,
    },
});