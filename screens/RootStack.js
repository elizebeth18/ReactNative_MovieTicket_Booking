import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesList from './MoviesList';
import MovieDetailScreen from './MovieDetailScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#39280acc' },
                headerTintColor: 'white',
            }}
        >
            <Stack.Screen
                name='Movies List'
                component={MoviesList}
            />
            <Stack.Screen
                name='MovieDetails'
                component={MovieDetailScreen}
            />
        </Stack.Navigator>
    );
}

export default RootStack;