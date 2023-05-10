import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { theme } from '../../utils/constants';
import EventCardVertical from './EventCardVertical';

interface PastEventsVerticalProps { }

const PastEventsVertical = (props: PastEventsVerticalProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>PAST</Text>



            <EventCardVertical />
            <EventCardVertical />
            <EventCardVertical />
            <EventCardVertical />
            <EventCardVertical />
            <EventCardVertical />
            <EventCardVertical />

        </View>
    );
};

export default PastEventsVertical;

const styles = StyleSheet.create({
    container: {},
    heading: {
        fontFamily: theme.fontHeadings.semibold,
        marginLeft: 20,
        color: theme.colors.white,
    }
});
