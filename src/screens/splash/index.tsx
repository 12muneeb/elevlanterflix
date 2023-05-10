import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AuthComponents } from '../../components';
import { theme } from '../../utils/constants';

interface SplashScreenProps { }

const SplashScreen = (props: SplashScreenProps) => {
    return (
        <View style={styles.container}>
            <AuthComponents.LogoAndFist height={300} fistH={60} />
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backdrop,
        justifyContent: "center",
        alignItems: "center"
    }
});
