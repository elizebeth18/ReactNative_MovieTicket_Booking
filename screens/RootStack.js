import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesList from './MoviesList';
import MovieDetailScreen from './MovieDetailScreen';
import UserDetailScreen from './UserDetailScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#540505' },
                headerTintColor: 'white',
                contentStyle: {
                    backgroundColor: '#1a1a1a'
                }
            }}
        >
            <Stack.Screen
                name='MoviesList'
                component={MoviesList}
                options={{
                    title: 'Movies List'
                }}
            />
            <Stack.Screen
                name='MovieDetails'
                component={MovieDetailScreen}
                options={({ route }) => ({
                    title: route.params?.title,
                    animation: 'none'
                })}
            />
            <Stack.Screen
                name='UserDetails'
                component={UserDetailScreen}
                options={{
                    title: 'User Details',
                    animation: 'none'
                }}
            />
        </Stack.Navigator>
    );
}

export default RootStack;