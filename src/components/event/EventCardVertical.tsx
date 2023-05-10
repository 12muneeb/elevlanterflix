import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Utilities } from '..';
import { theme } from '../../utils/constants';
import Image from 'react-native-fast-image'
import { renderEventName, renderImage, renderParagraphs } from '../../utils/helpers';
interface EventCardVerticalProps { }

const EventCardVertical = (props: EventCardVerticalProps) => {
    return (
        <View style={[styles.container, theme.colors.shadow]}>
            <LinearGradient colors={[theme.colors.formred, theme.colors.formredlight]} style={styles.bg} />
            <View style={{ width: 100, height: "85%", borderRadius: 20, overflow: 'hidden', }}>
                <Image resizeMode='cover' source={{ uri: renderImage() }} style={StyleSheet.absoluteFill} />
            </View>
            <View style={{ flex: 1, height: "100%", padding: 10, justifyContent: "space-between" }}>
                <Text numberOfLines={1} adjustsFontSizeToFit style={{ fontFamily: theme.fontHeadings.medium, color: theme.colors.white, fontSize: 20 }}>{renderEventName()}</Text>
                <Text numberOfLines={2} style={{ fontFamily: theme.fontRegulars.regular, color: theme.colors.white, fontSize: 9 }}>{renderParagraphs()}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 8 }}>
                    <Utilities.Icons.Entypo name='location' size={15} color={theme.colors.white} />
                    <Text numberOfLines={1} style={{ color: theme.colors.borderorangelight, fontFamily: theme.fontRegulars.regular }}>  {'San Franscisco, CA'}</Text>
                </View>
            </View>
        </View>
    );
};

export default EventCardVertical;

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 120,
        alignSelf: "center",
        marginVertical: 5,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        overflow: "hidden",
    },
    bg: { height: "110%", width: "120%", position: "absolute" }
});
