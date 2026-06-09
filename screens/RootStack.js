import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesList from './MoviesList';
import MovieDetailScreen from './MovieDetailScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#540505' },
                headerTintColor: 'white',
                contentStyle: {
                    backgroundColor: '#540505cc'
                }
            }}
        >
            <Stack.Screen
                name='Movies List'
                component={MoviesList}
            />
            <Stack.Screen
                name='MovieDetails'
                component={MovieDetailScreen}
                options={({ route }) => ({
                    title: route.params?.title,
                })}
            />
        </Stack.Navigator>
    );
}

export default RootStack;