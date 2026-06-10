import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native'
import { userForm, Controller, useForm } from 'react-hook-form';
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
                            style={{
                                borderWidth: 2,
                                color: '#ddb52f',
                                borderColor: '#ddb52f',
                                padding: 10,
                                margin: 5,
                            }}
                        />
                    )
                }}
            />

            {errors.name && (
                <Text>{errors.name.message}</Text>
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
                        style={{
                            borderWidth: 2,
                            color: '#ddb52f',
                            borderColor: '#ddb52f',
                            padding: 10,
                            margin: 5,
                        }}
                    />
                )}
            />

            {errors.email && (
                <Text>{errors.email.message}</Text>
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
                        style={{
                            borderWidth: 2,
                            color: '#ddb52f',
                            borderColor: '#ddb52f',
                            padding: 10,
                            margin: 5,
                        }}

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
                        style={{
                            borderWidth: 2,
                            color: '#ddb52f',
                            borderColor: '#ddb52f',
                            padding: 10,
                            margin: 5,
                        }}
                        onChange={(item) => onChange(item.value)}
                    />
                )}
            />

            {errors.seatType && (
                <Text>{errors.seatType.message}</Text>
            )}



            <Pressable
                onPress={handleSubmit(onSubmit)}
                style={{
                    backgroundColor: '#75b73bcc',
                    padding: 12,
                    marginTop: 10,
                }}
            >
                <Text style={{ color: 'white', textAlign: 'center' }}>
                    Submit
                </Text>
            </Pressable>
        </View>
    );
}

export default UserDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        padding: 15
    },
    textInput: {
        fontSize: 12,
        borderColor: '#ddb52f',
        borderWidth: 2,
        color: '#ddb52f',
    }
})