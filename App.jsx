import React from 'react';
import { enableScreens } from 'react-native-screens';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StoreProvider from './redux/StoreProvider.component';

import GameScreen from './screens/GameScreen.component';

enableScreens();

const App = () => {
    const [fontsLoaded] = useFonts({
        'clear-sans': require('./assets/fonts/ClearSans-Regular.ttf'),
        'clear-sans-bold': require('./assets/fonts/ClearSans-Bold.ttf'),
    });

    return !fontsLoaded ? (
        <AppLoading />
    ) : (
        <StoreProvider>
            <GameScreen />
        </StoreProvider>
    );
};

export default App;
