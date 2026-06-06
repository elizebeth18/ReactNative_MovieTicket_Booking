import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesList from './MoviesList';
const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: 'black'},
                headerTintColor: 'white'
            }}
        >
            <Stack.Screen name='Movies List' component={MoviesList}/>
        </Stack.Navigator>
    );
}

export default RootStack;