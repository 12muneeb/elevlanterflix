import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Utilities } from '../../../components';

interface SearchPageProps { }

const SearchPage = (props: SearchPageProps) => {
    return (
        <View style={styles.container}>
            <Utilities.HomeHeader editable search heading="SEARCH" />
        </View>
    );
};

export default SearchPage;

const styles = StyleSheet.create({
    container: {}
});
