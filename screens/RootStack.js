import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesList from './MoviesList';
import MySearchBar from '../components/MySearchBar';

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
        </Stack.Navigator>
    );
}

export default RootStack;