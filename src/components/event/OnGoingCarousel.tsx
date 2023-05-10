import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../utils/constants';
import Carousel from 'react-native-reanimated-carousel';
import Image from 'react-native-fast-image'
import EventCard from './EventCard';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const PAGE_WIDTH = Dimensions.get('window').width;
const colors = [
    '#26292E',
    '#899F9C',
    '#B3C680',
    '#5C6265',
    '#F5D399',
    '#F1F1F1',
];


interface OnGoingCarouselProps { }



const OnGoingCarousel = (props: OnGoingCarouselProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>ONGOING</Text>


            <Carousel
                {...{
                    vertical: false,
                    width: PAGE_WIDTH,
                    height: moderateScale(320),
                }}
                loop={false}
                pagingEnabled={true}
                snapEnabled={true}
                autoPlayInterval={1500}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 70,
                }}
                data={colors}
                renderItem={({ index }) => <EventCard />}
            />
        </View>
    );
};

export default OnGoingCarousel;

const styles = StyleSheet.create({
    container: {
    },
    heading: {
        fontFamily: theme.fontHeadings.semibold,
        marginLeft: 20,
        color: theme.colors.white,
        fontSize: moderateScale(20)
    }
});
