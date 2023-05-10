import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../utils/constants';
import Image from 'react-native-fast-image'
import { Utilities } from '..';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { renderImage, renderName, renderParagraphs } from '../../utils/helpers';

interface EventCardProps { }

const EventCard = (props: EventCardProps) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Image resizeMode="cover" style={{ width: "100%", height: "100%" }} source={{ uri: renderImage() }} />
                <LinearGradient colors={['transparent', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.8)']} style={{ position: "absolute", width: "100%", height: "100%" }} />
            </View>
            <LinearGradient colors={['#282828', '#242424', '#242424', '#242424']} style={{ padding: 10, paddingHorizontal: 30, minHeight: 60, backgroundColor: theme.colors.lightgray }}>
                <Text style={{ color: theme.colors.borderorange, fontFamily: theme.fontHeadings.semibold }}>{renderName()}</Text>
                <Text style={{ color: theme.colors.white, fontFamily: theme.fontRegulars.regular, fontSize: moderateScale(12) }}>{renderParagraphs()}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 8 }}>
                    <Utilities.Icons.Entypo name='location' size={moderateScale(19)} color={theme.colors.white} />
                    <Text numberOfLines={1} style={{ color: theme.colors.borderorangelight, fontFamily: theme.fontRegulars.regular, fontSize: moderateScale(15) }}>  {'San Franscisco, CA'}</Text>
                </View>
            </LinearGradient>
        </View>
    );
};

export default EventCard;

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: moderateScale(320),
        borderRadius: moderateScale(40),
        overflow: 'hidden',
        backgroundColor: theme.colors.backdrop,

        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
});


// <Image source={{ uri: "https://image.shutterstock.com/image-photo/word-demo-appearing-behind-torn-260nw-1782295403.jpg" }} style={{ width: "90%", height: 320 }} />