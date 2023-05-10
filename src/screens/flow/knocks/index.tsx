import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Utilities } from '../../../components';
interface KnocksPageProps { }

const KnocksPage = (props: KnocksPageProps) => {
    return (
        <View style={styles.container}>
            <Utilities.KnockCard />
            <Utilities.KnockCard />
            <Utilities.KnockCard />
            <Utilities.KnockCard />
            <Utilities.KnockCard />
            <Utilities.KnockCard />

        </View>
    );
};

export default KnocksPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    }
});
